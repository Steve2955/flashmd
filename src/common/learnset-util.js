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
	}
};
