<template>
	<nav class="navbar navbar-expand-md navbar-dark bg-dark">
		<span v-if="learnset && learnset.id" class="navbar-brand mb-0 h1 ml-2 mr-auto">{{learnset.name}}</span>
		<span v-else class="navbar-brand mb-0 h1 ml-2 mr-auto">Dashboard</span>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarNav">
			<div class="navbar-nav ml-auto">
				<div v-if="learnset && learnset.id  && $route.path.includes('learnset')" class="nav-item">
					<img src="@/assets/icons/delete.svg" class="clickable" @click="$emit('onDeleteLearnset', learnset)">
				</div>
				<hr class="border-top border-secondary w-100 d-md-none"/>
				<router-link to="/" v-bind:class="{ 'active': $route.path == '/' }" class="nav-item nav-link d-md-none ml-3" data-toggle="collapse" data-target="#navbarNav">Dashboard</router-link>
				<hr class="border-top border-secondary w-100 d-md-none"/>
				<p class="d-md-none py-2 mb-0 font-weight-light text-secondary">Your Learnsets:</p>
				<router-link :to="{ path: `/learnset/${l.id}`}" class="nav-item nav-link d-md-none ml-3" data-toggle="collapse" data-target="#navbarNav" v-bind:class="{ 'active': learnset && l.id == learnset.id }" v-for="l in learnsets"  :key="l.id">{{l.name}}</router-link>
			</div>
		</div>
	</nav>
</template>


<script>
import { mapGetters } from "vuex";

export default {
	name: 'Header',
	computed: {
		...mapGetters(['learnset', 'learnsets']),
	},
}
</script>

<style scoped>
.nav-item img{
	padding: 0.4rem 0.4rem 0 0.4rem;
}
</style>
