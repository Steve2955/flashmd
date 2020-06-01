<template>
	<div class="">
		<div class="jumbotron rounded-0">
			<h1 class="display-4">Welcome to FlashMD!</h1>
			<p class="lead">A simple flashcard tool for learning notes written in markdown.</p>
			<hr class="my-4">
			<p v-if="!learnsets.length">Just import your first learnset and start learning</p>
			<p v-else>Choose from your learnsets below or add a new one</p>
			<p class="lead">
				<a @click="$emit('addLearnset')" class="btn btn-primary btn-lg" href="#" role="button">Add new Learnset</a>
			</p>
		</div>
		<div class="container">
			<LearnsetProgressChart v-if="learnsets.length" :title="'Overall Progress'" :progress="{known: $store.getters.learnsetsKnownCardsCount, learning:$store.getters.learnsetsLearningCardsCount, unknown:$store.getters.learnsetsUnknownCardsCount}"/>
			<LearnsetList :learnsets="learnsets" @onLearnsetSelected="openLearnset" @onDeleteLearnset="deleteLearnset"/>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import LearnsetList from '@/components/learnset/LearnsetList';
import LearnsetProgressChart from '@/components/learnset/LearnsetProgressChart';

export default {
	name: 'Home',
	components: {
		LearnsetList,
		LearnsetProgressChart,
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
