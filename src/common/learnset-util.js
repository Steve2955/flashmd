import Vue from 'vue';
import { v4 as uuidv4 } from 'uuid';

export default {
	getCardTitle(card) {
		return card.front[1].content; // ToDo: consider other cases
	},
	getLearnsetTitle(tokens) {
		const i = 1 + tokens.findIndex(token => token.type === 'heading_open');
		return tokens[i].content; // ToDo: consider other cases
	},
	getCardLevel(card){
		return parseInt(card.front[0].tag[1])-1;
	},
	getTokensFromMarkdown(markdown){
		return Vue.$md.parse(markdown, {});
	},
	getLearnsetFromTokens(tokens, options){
		let cards = [];
		let card = {front: [], back: []};
		let isFront = true;

		for(let i = 0; i < tokens.length; i++){
			// new heading starts or end of array reached
			if((tokens[i].type === 'heading_open' && !isFront ) || i == tokens.length-1){
				// find the 'parent' card
				const category = [...cards].reverse().find(c => this.getCardLevel(c) < this.getCardLevel(card));
				if(category) card.category = this.getCardTitle(category);
				// some additional info for the card
				card.title = this.getCardTitle(card);
				cards.push({ ...card, id: uuidv4() });
				// reset variables
				isFront = true;
				card = {front: [], back: []};
			}
			// add token to the current side of the card
			card[isFront?'front':'back'].push(tokens[i]);
			// if the end of a heading is reached switch to the back of the card
			if(tokens[i].type === 'heading_close' && isFront) isFront = false;
		}
		// remove empty cards
		cards = cards.filter(card => card.back.length);
		// remove disabled levels
		cards = cards.filter(card => options.levels[this.getCardLevel(card)]);
		// additional info for the learnset
		const { url, name } = options;
		const id = uuidv4();
		const created = Date.now();
		const progressSummary = this.getLearnsetProgressSummary({ cards });
		// return everything
		return { cards, url, name, id, created, progressSummary };
	},
	getLearnsetFromMarkdown(markdown, options){
		return this.getLearnsetFromTokens(this.getTokensFromMarkdown(markdown), options);
	},
	getLearnsetProgressSummary(learnset){
		let unknown = 0, learning = 0, known = 0;
		for(let i = 0; i < learnset.cards.length; i++){
			if(!learnset.cards[i].stage || learnset.cards[i].stage <= 0) unknown++;
			else if(learnset.cards[i].stage && learnset.cards[i].stage > 0 && learnset.cards[i].stage < 3) learning++;
			else if(learnset.cards[i].stage && learnset.cards[i].stage >= 3) known++;
		}
		const state = this.getLearnsetsProgressState({progressSummary: {unknown, learning, known}});
		return { unknown, learning, known, state };
	},
	getLearnsetsProgressSummary(learnsets){
		let unknown = 0, learning = 0, known = 0;
		for(let i=0; i < learnsets.length; i++){
			unknown += learnsets[i].progressSummary.unknown;
			learning += learnsets[i].progressSummary.learning;
			known += learnsets[i].progressSummary.known;
		}
		return { unknown, learning, known };
	},
	getLearnsetsProgressState(learnset){
		const { unknown, learning, known } = learnset.progressSummary;
		const total = unknown + learning + known;
		if(known > total * 0.90) return 'known';
		if(learning + known > total * 0.3) return 'learning';
		return 'unknown';
	}
};
