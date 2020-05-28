<template>
	<div class="container pt-2">
		<div class="card bg-dark border border-secondary mb-3">
			<div class="card-body text-center">
				<div class="welcome mb-5" v-if="!learnsets.length">
					<h1 class="h3">Welcome to FlashMD</h1>
					<p class="text-center h6 mt-3">A simple tool to make digital flashcards from your exisiting markdown notes</p>
					<img class="mx-auto d-block mt-5" width="120" height="120" src="@/assets/app-icon/ic_base.svg">
				</div>
				<p class="text-center" v-if="!learnsets.length">Just open a markdown file and start learning</p>
				<p class="text-center" v-else>Choose from your learnsets below or open a markdown file</p>
				<div class="d-flex justify-content-center">
					<button type="button" class="btn btn-outline-light mr-2" @click="openFile">Open File</button>
					<button type="button" class="btn btn-outline-light" @click="openURL">Open URL</button>
				</div>
			</div>
		</div>

		<LearnsetList :learnsets="learnsets" @onLearnsetSelected="openLearnset" @onDeleteLearnset="deleteLearnset"/>

		<LearnsetOptionsModal :options.sync="options" :active.sync="showLearnsetOptionsModal" @saved="parseMarkdown"/>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import { LOAD_MARKDOWN_FROM_FILE, LOAD_MARKDOWN_FROM_URL, LOAD_LEARNSET_FROM_TOKENS } from '@/store/actions.type';
import { SET_LEARNSET, DELETE_LEARNSET } from '@/store/mutations.type';
import LearnsetOptionsModal from '@/components/LearnsetOptionsModal.vue';
import LearnsetList from '@/components/LearnsetList.vue';
import learnsetUtil from '@/common/learnset-util';

export default {
	name: 'Home',
	components: {
		LearnsetOptionsModal,
		LearnsetList,
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
	computed: {
		...mapGetters(['learnsets']),
	},
	methods: {
		openFile: async function(){
			// show file-dialog to user
			const md = await this.$store.dispatch(LOAD_MARKDOWN_FROM_FILE);
			// parse markdown
			const tokens = learnsetUtil.getTokensFromMarkdown(md);
			// show import option dialog
			this.showOptionsDialog({ tokens });
		},
		openURL: async function(){
			// get the url from the user
			const url = prompt('Please enter a url to your markdown file', '');
			if (!url) return console.error('empty url');
			// load markdown from url
			const md = await this.$store.dispatch(LOAD_MARKDOWN_FROM_URL, url);
			// parse markdown
			const tokens = learnsetUtil.getTokensFromMarkdown(md);
			// show import option dialog
			this.showOptionsDialog({ tokens, url });
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
			this.$store.dispatch(LOAD_LEARNSET_FROM_TOKENS, { tokens, levels, name, url })
				.then(() => this.$router.push('/learn'))
				.catch(err => console.error(err));
		},
		openLearnset: function(learnset){
			this.$router.push(`/learnset/${learnset.id}`);
		},
		deleteLearnset: function(learnset){
			this.$store.commit(DELETE_LEARNSET, learnset);
		}
	}
}
</script>
