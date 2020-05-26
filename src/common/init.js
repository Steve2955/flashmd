import Vue from 'vue';
import markdownit from 'markdown-it';
import texmath from 'markdown-it-texmath';
import katex from 'katex';
import hljs from 'highlight.js';

export default {
	async init() {
		const tm = texmath.use(katex);
		const md = markdownit({
			highlight: function (str, lang) {
					if (lang && hljs.getLanguage(lang)) {
						return `<pre class="hljs"><code>${hljs.highlight(lang, str, true).value}</code></pre>`;
					}
					return `<pre class="hljs"><code>${markdownit.utils.escapeHtml(str)}</code></pre>`;
			}
		}).use(tm, {delimiters:'dollars',macros:{"\\RR": "\\mathbb{R}"}});
		Vue.prototype.$md = Vue.$md = md;
	}
};
