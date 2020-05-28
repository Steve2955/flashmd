<template>
	<nav class="navbar fixed-bottom navbar-dark bg-dark px-5 d-md-none">
		<img @click="$emit('prevCard')" src="@/assets/icons/arrow_back.svg" width="48" height="48" class="d-inline-block align-top" alt="" loading="lazy">
		<img @click="$emit('nextCard')" src="@/assets/icons/arrow_forward.svg" width="48" height="48" class="d-inline-block align-top" alt="" loading="lazy">
	</nav>
</template>


<script>
export default {
	name: 'Footer',
}
</script>
