<template>
	<div id="app">
		<Sidebar/>
		<div id="content">
			<Header />
			<router-view />
		</div>
		<a class="github-fork-ribbon left-bottom fixed d-none d-md-block" href="https://github.com/Steve2955/flashmd" data-ribbon="Fork me on GitHub" title="Fork me on GitHub">Fork me on GitHub</a>
	</div>
</template>

<script>
import Header from './components/Header.vue';
import Sidebar from '@/components/Sidebar';

export default {
	name: 'App',
	components: {
		Header,
		Sidebar,
	},
}
</script>

<style>
#content {
	width: calc(100% - 250px);
	min-height: 100vh;
	transition: all 0.3s;
	position: absolute;
	top: 0;
	right: 0;
}

.github-fork-ribbon.left-bottom:before {
	background-color: #333;
}

@media (max-width: 768px) {
	#content {
		width: 100%;
	}
}
</style>
