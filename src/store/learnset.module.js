import { LOAD_LEARNSET_FROM_FILE, LOAD_LEARNSET_FROM_URL, PARSE_LEARNSET } from './actions.type';
import { SET_LEARNSET } from './mutations.type';
import fileDialog from 'file-dialog';
import markdownit from 'markdown-it';

const md = markdownit();

const state = {
	learnset: {},
};

const getters = {
	learnset: state => state.learnset,
};

const actions = {
	async [LOAD_LEARNSET_FROM_FILE]({ dispatch }) {
		const files = await fileDialog({ accept: '.md,.markdown' });
		if(!files[0]) throw Error('No file selected');
		const reader = new FileReader();
		reader.onload = () => dispatch(PARSE_LEARNSET, reader.result);
		reader.readAsText(files[0]);
	},
	[LOAD_LEARNSET_FROM_URL]({ dispatch }) {
		dispatch(PARSE_LEARNSET, '');
	},
	[PARSE_LEARNSET]({ commit }, markdown) {

		let tokens = md.parse(markdown, {});
		let cards = [];
		let card = {front: [], back: []};
		let isFront = true;

		for(let i = 0; i < tokens.length; i++){
			if((tokens[i].type === 'heading_open' && !isFront ) || i==tokens.length-1){
					isFront = true;
					const category = [...cards].reverse().find(c => c.front[0].tag[1] < card.front[0].tag[1]);
					if(category) card.category = category.front[1].content; // ToDo: consider other cases
					cards.push(card);
					card = {front: [], back: []};
			}

			card[isFront?'front':'back'].push(tokens[i]);

			if(tokens[i].type === 'heading_close' && isFront){
				isFront = false;
			}
		}
		cards = cards.filter(card => card.back.length);
		commit(SET_LEARNSET, markdown);
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
