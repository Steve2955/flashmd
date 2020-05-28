import { LOAD_MARKDOWN_FROM_FILE, LOAD_MARKDOWN_FROM_URL, ADD_LEARNSET_FROM_TOKENS, ADD_LEARNSET_FROM_MARKDOWN } from './actions.type';
import { SET_LEARNSET, SET_LEARNSET_FROM_ID, PUSH_LEARNSET, RESET_LEARNSET, DELETE_LEARNSET, KNOWN_CARD, UNKNOWN_CARD } from './mutations.type';
import fileDialog from 'file-dialog';
import learnsetUtil from '@/common/learnset-util';

const state = {
	learnset: {},
	learnsets: [],
};

const getters = {
	learnset: state => state.learnset,
	learnsets: state => state.learnsets,
};

const actions = {
	[LOAD_MARKDOWN_FROM_FILE]() {
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
	[LOAD_MARKDOWN_FROM_URL](context, url) {
		return fetch(url).then((response) => {
				if(response.status == 200){
					return response.text();
				}else{
					new Error(`Failed to load file with statuscode ${response.status}`);
				}
		});
	},
	[ADD_LEARNSET_FROM_MARKDOWN]({ commit }, md){
		const { markdown, ...options} = md;
		const learnset =  learnsetUtil.getLearnsetFromMarkdown(markdown, options);
		commit(PUSH_LEARNSET, learnset);
		return learnset;
	},
	[ADD_LEARNSET_FROM_TOKENS]({ commit }, md) {
		const { tokens, ...options} = md;
		const learnset = learnsetUtil.getLearnsetFromTokens(tokens, options);
		commit(PUSH_LEARNSET, learnset);
		return learnset;
	},
};

const mutations = {
	[SET_LEARNSET](state, learnset) { state.learnset = learnset; },
	[PUSH_LEARNSET](state, learnset) { state.learnsets.push(learnset); },
	[SET_LEARNSET_FROM_ID](state, id) { state.learnset = state.learnsets.find(l => l.id === id); },
	[RESET_LEARNSET](state) { state.learnset = undefined },
	[DELETE_LEARNSET](state, learnset) { state.learnsets.splice(state.learnsets.findIndex(l => l.id === learnset.id), 1); },
	[KNOWN_CARD](state, cardIndex) {
		state.learnset.cards[cardIndex].lastAnswered = state.learnset.lastUsed = Date.now();
		if(!state.learnset.cards[cardIndex].stage) state.learnset.cards[cardIndex].stage = 1
		else state.learnset.cards[cardIndex].stage++;
	},
	[UNKNOWN_CARD](state, cardIndex) {
		state.learnset.cards[cardIndex].lastAnswered = state.learnset.lastUsed = Date.now();
		state.learnset.cards[cardIndex].stage = 0;
	},
};

export default {
	state,
	getters,
	actions,
	mutations,
};
