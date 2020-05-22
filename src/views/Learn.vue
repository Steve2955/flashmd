<template>
	<div>
		<div class="container pb-5">
			<div class="card" v-if="learnset && learnset.cards && learnset.cards.length > 1">
				<div class="card-body bg-dark">
					<h2 class="h4">{{learnset.cards[currentCard].title}}</h2>
					<MarkdownRenderer v-if="showBack" :elements="learnset.cards[currentCard].back"/>
				</div>
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
	components: {
		MarkdownRenderer,
		Footer,
	},
	data(){
		return {
			currentCard: 0,
			showBack: false,
		};
	},
	computed: {
		...mapGetters(['learnset']),
	},
	methods:{
		nextCard: function(){
			this.showBack = false;
			this.currentCard = ++this.currentCard % this.learnset.cards.length;
		},
		prevCard: function(){
			this.showBack = false;
			this.currentCard = (this.currentCard<1) ? (this.learnset.cards.length-1) : --this.currentCard;
		},
	},
	mounted() {
		this._keyListener = function(e){
			switch(e.keyCode){
				case 32: // space
					e.preventDefault();
					this.showBack = true;
					break;
				case 39: // right-arrow
					e.preventDefault();
					this.nextCard();
					break;
				case 37: // left-arrow
					e.preventDefault();
					this.prevCard();
					break;
			}
		};
		document.addEventListener('keydown', this._keyListener.bind(this));
	},
	beforeDestroy() {
		document.removeEventListener('keydown', this._keyListener);
	},
};
</script>
