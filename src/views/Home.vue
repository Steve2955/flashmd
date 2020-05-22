<template>
	<div class="container pt-5">
		<h1 class="text-center h3">Welcome to FlashMD</h1>
		<p class="text-center h6 mt-3">A simple tool to make digital flashcards from your exisiting markdown notes</p>
		<div class="mt-5">
			<p class="text-center">Just open a markdown file and start learning</p>
			<div class="d-flex justify-content-center">
				<button type="button" class="btn btn-outline-light mr-2" @click="openFile">Open File</button>
				<button type="button" class="btn btn-outline-light">Open URL</button>
			</div>
		</div>
	</div>
</template>

<script>
import { LOAD_LEARNSET_FROM_FILE } from '@/store/actions.type';

export default {
	name: 'Home',
	methods: {
		openFile: function(){
			this.$store.dispatch(LOAD_LEARNSET_FROM_FILE);
		}
	}
}
</script>
