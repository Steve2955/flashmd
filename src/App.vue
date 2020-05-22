<template>
	<div id="app">
		<Header/>
		<router-view/>
	</div>
</template>

<script>
import Header from './components/Header.vue';

export default {
	name: 'App',
	components: {
		Header,
	},
}
</script>

<style lang="scss">
#app {
	margin-top: 3rem;
}
</style>
