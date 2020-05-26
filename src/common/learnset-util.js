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

			card[isFront?'front':'back'].push(tokens[i]);

			if(tokens[i].type === 'heading_close' && isFront){
				isFront = false;
			}
		}
		// remove empty cards
		cards = cards.filter(card => card.back.length);
		// remove disabled levels
		cards = cards.filter(card => options.levels[this.getCardLevel(card)]);
		// additional info for the learnset
		const { url, name } = options;
		const id = uuidv4();

		return { cards, url, name, id };
	},
	getLearnsetFromMarkdown(markdown, options){
		return this.getLearnsetFromTokens(this.getTokensFromMarkdown(markdown), options);
	},
};
