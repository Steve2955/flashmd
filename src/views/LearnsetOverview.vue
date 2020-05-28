<template>
	<div class="container pt-2">
		<div class="">
			<router-link :to="{ path: `/learn/${learnset.id}`}" class="btn btn-outline-primary">Continue Learning</router-link>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import { SET_LEARNSET_FROM_ID, RESET_LEARNSET } from '@/store/mutations.type';

export default {
	name: 'Home',
	computed: {
		...mapGetters(['learnset']),
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
}
</script>
