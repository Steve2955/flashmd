<template>
	<div>
		<div class="container pb-5">
			<div class="md-card pb-3" v-if="learnset.cards">
				<MarkdownRenderer :elements="learnset.cards[currentCard].front"/>
				<MarkdownRenderer :elements="learnset.cards[currentCard].back"/>
			</div>
		</div>
		<Footer @nextCard="nextCard" @prevCard="prevCard"/>
	</div>
</template>


<script>
import { mapGetters } from "vuex";
import MarkdownRenderer from '@/components/MarkdownRenderer.vue';
import Footer from '@/components/Footer.vue';

export default {
	name: "Learn",
	data(){
		return {
			currentCard: 0,
		};
	},
	components: {
		MarkdownRenderer,
		Footer,
	},
	methods:{
		nextCard: function(){
			this.currentCard++;
			this.currentCard = this.currentCard % this.learnset.cards.length;
		},
		prevCard: function(){
			this.currentCard = (this.currentCard<1) ? this.learnset.cards.length-1 : --this.currentCard;
		},
	},
	computed: {
		...mapGetters(['learnset']),
	},
};
</script>
