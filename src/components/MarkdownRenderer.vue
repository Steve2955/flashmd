<template>
	<div class="md" ref="body"></div>
</template>


<script>
export default {
	name: 'MarkdownRenderer',
	props: {
		elements: Array,
	},
	methods: {
		renderMD(elements){
			elements = elements || this.elements;
			this.$refs.body.innerHTML = this.$md.renderer.render(elements, this.$md.options, {});
		},
	},
	mounted(){
		this.renderMD();
	},
	watch: {
		elements: function (newElements){
			this.renderMD(newElements);
		}
	}
}
</script>
