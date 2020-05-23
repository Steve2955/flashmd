<template>
	<div class="container pt-5">
		<h1 class="text-center h3">Welcome to FlashMD</h1>
		<p class="text-center h6 mt-3">A simple tool to make digital flashcards from your exisiting markdown notes</p>
		<img class="mx-auto d-block mt-5" width="150" height="150" src="@/assets/app-icon/ic_base.svg">
		<div class="mt-5">
			<p class="text-center">Just open a markdown file and start learning</p>
			<div class="d-flex justify-content-center">
				<button type="button" class="btn btn-outline-light mr-2" @click="openFile">Open File</button>
				<button type="button" class="btn btn-outline-light" @click="openURL">Open URL</button>
			</div>
		</div>
		<LearnsetOptionsModal :options.sync="options" :active.sync="showLearnsetOptionsModal" @saved="parseMarkdown"/>
	</div>
</template>

<script>
import { LOAD_LEARNSET_FROM_FILE, LOAD_LEARNSET_FROM_URL, TOKENIZE_MARKDOWN, PARSE_LEARNSET } from '@/store/actions.type';
import LearnsetOptionsModal from '@/components/LearnsetOptionsModal.vue';
import learnsetUtil from '@/common/learnset-util';

export default {
	name: 'Home',
	components: {
		LearnsetOptionsModal,
	},
	data(){
		return {
			tokens: undefined,
			showLearnsetOptionsModal: false,
			options: {
				name: undefined,
				url: undefined,
				levels: [true, true, true, true, true, true],
			},
		};
	},
	methods: {
		openFile: function(){
			this.$store.dispatch(LOAD_LEARNSET_FROM_FILE)
				.then(md => this.$store.dispatch(TOKENIZE_MARKDOWN, md))
				.then(tokens => this.showOptionsDialog({ tokens }))
				.catch(err => console.error(err));
		},
		openURL: function(){
			const url = prompt("Please enter a url to your markdown file", "");
			if (!url) return console.error('empty url');
			this.$store.dispatch(LOAD_LEARNSET_FROM_URL, url)
				.then(md => this.$store.dispatch(TOKENIZE_MARKDOWN, md))
				.then(tokens => this.showOptionsDialog({ tokens, url }))
				.catch(err => console.error(err));
		},
		showOptionsDialog: function({ tokens, url }){
			// save tokens for later
			this.tokens = tokens;
			// set some default options
			this.options.name = learnsetUtil.getLearnsetTitle(tokens);
			this.options.url = url;
			// give the user the ability to change some options
			this.showLearnsetOptionsModal = true;
		},
		parseMarkdown: function(){
			const { levels, name, url } = this.options;
			const { tokens } = this;
			this.$store.dispatch(PARSE_LEARNSET, { tokens, levels, name, url })
				.then(() => this.$router.push('/learn'))
				.catch(err => console.error(err));
		},
	}
}
</script>
