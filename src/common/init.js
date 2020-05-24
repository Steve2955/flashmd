import Vue from 'vue';
import markdownit from 'markdown-it';
import texmath from 'markdown-it-texmath';
import katex from 'katex';

export default {
	async init() {
		const md = markdownit().use(texmath, { engine: katex, delimiters:'dollars', katexOptions: { macros: {"\\RR": "\\mathbb{R}"}}});
		Vue.prototype.$md = Vue.$md = md;
	}
};
