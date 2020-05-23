import Vue from 'vue';
import { LOAD_LEARNSET_FROM_FILE, LOAD_LEARNSET_FROM_URL, TOKENIZE_MARKDOWN, PARSE_LEARNSET } from './actions.type';
import { SET_LEARNSET } from './mutations.type';
import fileDialog from 'file-dialog';
import learnsetUtil from '@/common/learnset-util';

const state = {
	learnset: {},
};

const getters = {
	learnset: state => state.learnset,
};

const actions = {
	[LOAD_LEARNSET_FROM_FILE]() {
		// eslint-disable-next-line
		return new Promise(async (resolve, reject) => {
			const files = await fileDialog({ accept: '.md,.markdown' });
			if(!files[0]) reject(new Error('No file selected'));
			const reader = new FileReader();
			reader.onload = () => resolve(reader.result);
			reader.onerror = () => reject(new Error('No file selected'));
			reader.readAsText(files[0]);
		});
	},
	[LOAD_LEARNSET_FROM_URL](url) {
		return fetch(url).then((response) => {
				if(response.status == 200){
					return response.text();
				}else{
					new Error(`Failed to load file with statuscode ${response.status}`);
				}
		});
	},
	[TOKENIZE_MARKDOWN](context, markdown){
		return Vue.$md.parse(markdown, {});
	},
	async [PARSE_LEARNSET]({ commit, dispatch }, markdown) {
		let tokens = markdown.tokens || await dispatch(TOKENIZE_MARKDOWN, markdown.md || markdown);
		let cards = [];
		let card = {front: [], back: []};
		let isFront = true;

		for(let i = 0; i < tokens.length; i++){
			if((tokens[i].type === 'heading_open' && !isFront ) || i==tokens.length-1){
				isFront = true;
				const category = [...cards].reverse().find(c => c.front[0].tag[1] < card.front[0].tag[1]);
				if(category) card.category = learnsetUtil.getCardTitle(category);
				card.title = learnsetUtil.getCardTitle(card);
				cards.push(card);
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
		cards = cards.filter(card => markdown.levels[learnsetUtil.getCardLevel(card)]);

		const url = markdown.url || undefined;
		const name = markdown.name || undefined;

		const learnset = { cards, url, name };
		commit(SET_LEARNSET, learnset);
		return learnset;
	},
};

const mutations = {
	[SET_LEARNSET](state, learnset) { state.learnset = learnset; },
};

export default {
	state,
	getters,
	actions,
	mutations,
};
