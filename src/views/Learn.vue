<template>
	<div>
		<div class="container pt-3 mb-3">
			<div class="card" v-if="learnset && learnset.cards && learnset.cards.length > 1">
				<div class="card-body bg-dark">
					<h2 class="h4">{{learnset.cards[currentCard].title}}</h2>
					<MarkdownRenderer v-if="showBack" :elements="learnset.cards[currentCard].back"/>
				</div>
			</div>
			<CardControl :showBack.sync="showBack" v-if="learnset && learnset.cards && learnset.cards.length > 1" @nextCard="nextCard" @prevCard="prevCard" @knownCard="knownCard" @unknownCard="unknownCard"/>
			<div class="card" v-else>
				<div class="card-body bg-dark">
					<h4 class="text-center my-5">Something went wrong!</h4>
					<img class="mx-auto d-block mt-5" width="100" height="100" src="@/assets/icons/sentiment_very_dissatisfied.svg" alt="">
					<div class="d-flex justify-content-center my-5">
						<router-link tag="button" to="/" type="button" class="btn btn-outline-light">Return to home</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
import { mapGetters } from "vuex";
import { RESET_LEARNSET, SET_LEARNSET_FROM_ID, KNOWN_CARD, UNKNOWN_CARD } from '@/store/mutations.type';

import MarkdownRenderer from '@/components/card/MarkdownRenderer.vue';
import CardControl from '@/components/card/CardControl.vue';

export default {
	name: "Learn",
	components: {
		MarkdownRenderer,
		CardControl,
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
		knownCard: function(){
			this.$store.commit(KNOWN_CARD, this.currentCard);
			this.nextCard();
		},
		unknownCard: function(){
			this.$store.commit(UNKNOWN_CARD, this.currentCard);
			this.nextCard();
		},
	},
	mounted() {
		this._keyListener = function(e){
			switch(e.keyCode){
				case 32: // space
					e.preventDefault();
					this.showBack = !this.showBack;
					break;
				case 39: // right-arrow
					e.preventDefault();
					if(this.showBack) this.knownCard()
					else this.nextCard();
					break;
				case 37: // left-arrow
					e.preventDefault();
					if(this.showBack) this.unknownCard()
					else this.prevCard();
					break;
			}
		};
		document.addEventListener('keydown', this._keyListener.bind(this));
	},
	beforeDestroy() {
		document.removeEventListener('keydown', this._keyListener);
	},
	created(){
		this.$store.commit(SET_LEARNSET_FROM_ID, this.$route.params.id);
	},
	beforeRouteUpdate (to, from, next) {
		this.$store.commit(SET_LEARNSET_FROM_ID, to.params.id);
		next();
	},
	beforeRouteLeave (to, from, next) {
		this.$store.commit(RESET_LEARNSET);
		next();
	}
};
</script>

<style scoped>
.container{
	padding-bottom: 5.5rem;
}
</style>
