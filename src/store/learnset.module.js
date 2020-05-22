import Vue from 'vue';
import { LOAD_LEARNSET_FROM_FILE, LOAD_LEARNSET_FROM_URL, PARSE_LEARNSET } from './actions.type';
import { SET_LEARNSET } from './mutations.type';
import fileDialog from 'file-dialog';
import mdUtil from '@/common/md-util';

const state = {
	learnset: {},
};

const getters = {
	learnset: state => state.learnset,
};

const actions = {
	[LOAD_LEARNSET_FROM_FILE]({ dispatch }) {
		// eslint-disable-next-line
		return new Promise(async (resolve, reject) => {
			const files = await fileDialog({ accept: '.md,.markdown' });
			if(!files[0]) reject(new Error('No file selected'));
			const reader = new FileReader();
			reader.onload = () => resolve(dispatch(PARSE_LEARNSET, reader.result));
			reader.onerror = () => reject(new Error('No file selected'));
			reader.readAsText(files[0]);
		});
	},
	[LOAD_LEARNSET_FROM_URL]({ dispatch }) {
		let url = prompt("Please enter a url to your markdown file", "");
		if (!url) return;
		return fetch(url).then((response) => {
				if(response.status == 200){
					return response.text();
				}else{
					new Error(`Failed to load file with statuscode ${response.status}`);
				}
		}).then(response => dispatch(PARSE_LEARNSET, response));
	},
	[PARSE_LEARNSET]({ commit }, markdown) {

		let tokens = Vue.$md.parse(markdown, {});
		let cards = [];
		let card = {front: [], back: []};
		let isFront = true;

		for(let i = 0; i < tokens.length; i++){
			if((tokens[i].type === 'heading_open' && !isFront ) || i==tokens.length-1){
					isFront = true;
					const category = [...cards].reverse().find(c => c.front[0].tag[1] < card.front[0].tag[1]);
					if(category) card.category = mdUtil.getCardTitle(category);
					card.title = mdUtil.getCardTitle(card);
					cards.push(card);
					card = {front: [], back: []};
			}

			card[isFront?'front':'back'].push(tokens[i]);

			if(tokens[i].type === 'heading_close' && isFront){
				isFront = false;
			}
		}
		cards = cards.filter(card => card.back.length);
		const learnset = {cards};
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
