<template>
	<div class="d-flex justify-content-between clickable">
		<span @click="$emit('onLearnsetSelected', learnset)">{{learnset.name}}</span>
		<img src="@/assets/icons/delete.svg" @click="$emit('onDeleteLearnset', learnset)">
	</div>
</template>

<script>
export default {
	name: 'LearnsetListItem',
	props: {
		learnset: Object,
	},
};
</script>
