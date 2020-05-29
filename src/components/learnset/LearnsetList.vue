<template>
	<div class="card bg-dark border border-secondary mb-3">
		<div class="card-body">
			<h5 class="card-title">Your learnsets</h5>
			<div v-if="learnsets.length">
				<div v-for="(learnset, index) in learnsets" :key="index">
					<LearnsetListItem :learnset="learnset" @onDeleteLearnset="$emit('onDeleteLearnset', learnset)" @onLearnsetSelected="$emit('onLearnsetSelected', learnset)"/>
					<hr v-if="index !== learnsets.length-1"/>
				</div>
			</div>
			<div v-else class="card-body mt-3">
				<p class="text-center h-4">No learnsets, yet.</p>
			</div>
		</div>
	</div>
</template>

<script>
import LearnsetListItem from '@/components/learnset/LearnsetListItem.vue';

export default {
	name: 'LearnsetList',
	components: {
		LearnsetListItem,
	},
	props: {
		learnsets: Array,
	},
};
</script>
