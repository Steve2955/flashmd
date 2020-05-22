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
	</div>
</template>

<script>
import { LOAD_LEARNSET_FROM_FILE, LOAD_LEARNSET_FROM_URL } from '@/store/actions.type';

export default {
	name: 'Home',
	methods: {
		openFile: function(){
			this.$store.dispatch(LOAD_LEARNSET_FROM_FILE)
				.then(() => {
					this.$router.push('learn');
				})
				.catch(err => console.error(err));
		},
		openURL: function(){
			this.$store.dispatch(LOAD_LEARNSET_FROM_URL)
				.then(() => {
					this.$router.push('learn');
				})
				.catch(err => console.error(err));
		},
	}
}
</script>
