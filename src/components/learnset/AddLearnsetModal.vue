<template>
	<div id="addLearnsetModal" class="modal" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog">
		<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">Import Learnset</h5>
				</div>
				<div class="modal-body">
					<form v-if="step == 0" class="container">
						<div class="form-group">
							<label class="font-weight-bold">From URL</label>
							<input type="text" v-model="options.url" class="form-control" placeholder="URL">
						</div>
						<hr class="hr-text my-5" data-content="OR"/>
						<button @click="openFile" type="button" class="btn btn-outline-primary btn-lg btn-block" name="button">From File</button>
					</form>
					<form v-if="step == 1" class="container">
						<form class="container">
							<div class="form-group">
								<label class="font-weight-bold">Give this learnset a name</label>
								<input type="text" v-model="options.name" class="form-control" placeholder="Learnset Name">
							</div>
							<label class="font-weight-bold">Enable/Disable certain heading levels</label>
							<div class="form-group form-check mb-0" v-for="(level, index) in options.levels"  :key="index">
								<input type="checkbox" v-model="options.levels[index]" class="form-check-input">
								<label class="form-check-label">Heading {{index+1}}</label>
							</div>
						</form>
					</form>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" @click="$emit('update:active', false); Object.assign($data, $options.data());" data-dismiss="modal">Cancel</button>
					<button v-if="step == 0" type="button" class="btn btn-primary" @click="openURL">Import Learnset</button>
					<button v-if="step == 1" type="button" class="btn btn-primary" @click="addLearnset">Add Learnset</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import $ from 'jquery';
import learnsetUtil from '@/common/learnset-util';
import { LOAD_MARKDOWN_FROM_FILE, LOAD_MARKDOWN_FROM_URL, ADD_LEARNSET_FROM_TOKENS } from '@/store/actions.type';

export default {
	name: 'AddLearnsetModal',
	data(){
		return {
			step: 0,
			tokens: undefined,
			options: {
				name: undefined,
				url: undefined,
				levels: [true, true, true, true, true, true],
			},
		};
	},
	props: {
		active: Boolean,
	},
	watch: {
		active: function (newVal) {
			$('#addLearnsetModal').modal(newVal?'show':'hide');
		}
	},
	methods: {
		openFile: async function(){
			// show file-dialog to user
			const md = await this.$store.dispatch(LOAD_MARKDOWN_FROM_FILE);
			// parse markdown
			this.tokens = learnsetUtil.getTokensFromMarkdown(md);
			this.options.url = undefined;
			this.options.name = learnsetUtil.getLearnsetTitle(this.tokens);
			this.step = 1;
		},
		openURL: async function(){
			// load markdown from url
			const md = await this.$store.dispatch(LOAD_MARKDOWN_FROM_URL, this.options.url);
			// parse markdown
			this.tokens = learnsetUtil.getTokensFromMarkdown(md);
			this.options.name = learnsetUtil.getLearnsetTitle(this.tokens);
			this.step = 1;
		},
		addLearnset: async function(){
			const { levels, name, url } = this.options;
			const { tokens } = this;
			// add the new learnset
			this.$store.dispatch(ADD_LEARNSET_FROM_TOKENS, { tokens, levels, name, url })
				.then(learnset => {
					// navigate to next page
					this.$router.push(`/learn/${learnset.id}`);
					this.$emit('update:active', false);
					// reset component
					Object.assign(this.$data, this.$options.data());
				})
				.catch(err => console.error(err));
		}
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/variables';

.hr-text {
	line-height: 1em;
	position: relative;
	outline: 0;
	border: 0;
	text-align: center;
	height: 3em;
	&:before {
		content: '';
		background-color: $gray-100;
		position: absolute;
		left: 0;
		top: 50%;
		width: 100%;
		height: 1px;
	}
	&:after {
		content: attr(data-content);
		position: relative;
		display: inline-block;
		color: black;
		padding: 0 .5em;
		line-height: 1.5em;
		font-size: 2em;
		color: $white;
		background-color: $modal-content-bg;
	}
}
</style>
