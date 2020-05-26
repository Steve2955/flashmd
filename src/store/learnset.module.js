import { LOAD_MARKDOWN_FROM_FILE, LOAD_MARKDOWN_FROM_URL, LOAD_LEARNSET_FROM_TOKENS, LOAD_LEARNSET_FROM_MARKDOWN } from './actions.type';
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
	[LOAD_MARKDOWN_FROM_URL](url) {
		return fetch(url).then((response) => {
				if(response.status == 200){
					return response.text();
				}else{
					new Error(`Failed to load file with statuscode ${response.status}`);
				}
		});
	},
	[LOAD_LEARNSET_FROM_MARKDOWN](context, md){
		const { markdown, ...options} = md;
		return learnsetUtil.getLearnsetFromMarkdown(markdown, options);
	},
	[LOAD_LEARNSET_FROM_TOKENS]({ commit }, md) {
		const { tokens, ...options} = md;
		const learnset = learnsetUtil.getLearnsetFromTokens(tokens, options);
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
