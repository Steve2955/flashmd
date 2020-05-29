<template>
	<nav id="sidebar" class="bg-dark">
		<div class="sidebar-header p-4">
			<h3>FlashMD</h3>
		</div>
		<div class="sidebar-content">
			<router-link to="/" tag="div" class="item py-3 d-flex clickable" v-bind:class="{ 'active': $route.path == '/' }">
				<img src="@/assets/icons/dashboard.svg" class="icon ml-3 align-self-center">
				<div class="text-white text-decoration-none align-self-center ml-3">Dashboard</div>
			</router-link>
			<div v-if="learnsets && learnsets.length">
				<hr class="mx-2"/>
				<div class="ml-3">
					<h6 class="font-weight-light text-secondary">Your Learnsets</h6>
				</div>
				<router-link :to="{ path: `/learnset/${learnset.id}`}" class="item py-3 d-flex text-decoration-none" v-for="learnset in learnsets" :key="learnset.id" v-bind:class="{ 'active': $route.path == `/learnset/${learnset.id}` }">
					<div class="text-white align-self-center ml-3">{{learnset.name}}</div>
				</router-link>
				<div class="p-2">
					<button type="button" class="btn btn-outline-primary btn-lg btn-block" @click="$emit('addLearnset')">Add new Learnset</button>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	name: 'Sidebar',
	computed: {
		...mapGetters(['learnsets']),
	},
};
</script>

<style lang="scss">

@import '@/assets/variables';

#sidebar {
	width: 250px;
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	z-index: 999;
	color: #fff;
	transition: all 0.3s;
}

.sidebar-content .item {
	font-size: 1.1em;
	display: block;
}

.sidebar-content .item.active {
	background-color: $gray-990;
}

.sidebar-content .item:hover {
	background-color: $gray-800;
}

.sidebar-content .item .icon {
	width: 1.5rem;
}


hr {
	margin-top: 1rem;
	margin-bottom: 1rem;
	border: 0;
	border-top: 1px solid $gray-900;
}

@media (max-width: 768px) {
	#sidebar {
		margin-left: -250px;
	}
}
</style>
