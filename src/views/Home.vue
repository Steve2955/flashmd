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
				<p class="text-center" v-else>Choose from your learnsets below or add a new one</p>
				<div class="d-flex justify-content-center">
					<button type="button" class="btn btn-outline-light mr-2" @click="$emit('addLearnset')">Add a new Learnset</button>
				</div>
			</div>
		</div>
		<LearnsetList :learnsets="learnsets" @onLearnsetSelected="openLearnset" @onDeleteLearnset="deleteLearnset"/>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import LearnsetList from '@/components/LearnsetList.vue';

export default {
	name: 'Home',
	components: {
		LearnsetList,
	},
	data(){
		return {
			showLearnsetOptionsModal: false,
		};
	},
	computed: {
		...mapGetters(['learnsets']),
	},
	methods: {
		openLearnset: function(learnset){
			this.$router.push(`/learnset/${learnset.id}`);
		},
		deleteLearnset: function(learnset){
			this.$emit('onDeleteLearnset', learnset)
		},
	}
}
</script>
