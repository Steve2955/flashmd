<template>
	<div class="mt-3 mx-5">
		<div v-if="showBack" class="d-flex justify-content-between">
			<img @click="$emit('unknownCard')" class="clickable" src="@/assets/icons/wrong.svg" width="48" height="48">
			<img @click="$emit('update:showBack', false)" class="clickable" src="@/assets/icons/visibility_off.svg" width="48" height="48">
			<img @click="$emit('knownCard')" class="clickable" src="@/assets/icons/right.svg" width="48" height="48">
		</div>
		<div v-else class="d-flex justify-content-between">
			<img @click="$emit('prevCard')" class="clickable" src="@/assets/icons/arrow_back.svg" width="48" height="48">
			<img @click="$emit('update:showBack', true)" class="clickable" src="@/assets/icons/visibility.svg" width="48" height="48">
			<img @click="$emit('nextCard')" class="clickable" src="@/assets/icons/arrow_forward.svg" width="48" height="48">
		</div>
	</div>
</template>

<script>
export default {
	name: 'Footer',
	props: {
		showBack: Boolean,
	}
}
</script>
