<template>
	<div class="about">
		<div class="" v-for="(card, index) in learnset.cards"  :key="index">
			<p class="font-weight-bold">{{card.category}}</p>
			<MarkdownRenderer :elements="card.front"/>
			<MarkdownRenderer :elements="card.back"/>
		</div>
	</div>
</template>


<script>
import { mapGetters } from "vuex";
import MarkdownRenderer from '@/components/MarkdownRenderer.vue';

export default {
	name: "Learn",
	components: {
		MarkdownRenderer,
	},
	computed: {
		...mapGetters(['learnset']),
	},
};
</script>
