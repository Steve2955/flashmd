import Vue from 'vue';
import markdownit from 'markdown-it';

export default {
	async init() {
		const md = markdownit();
		Vue.prototype.$md = Vue.$md = md;
	}
};
