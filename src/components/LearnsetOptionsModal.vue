<template>
	<div id="learnsetOptionsModal" class="modal" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog">
		<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">Options</h5>
				</div>
				<div class="modal-body">
					<form class="container">
						<div class="form-group">
							<label class="font-weight-bold">Give this learnset a name</label>
							<input type="text" v-model="loptions.name" class="form-control" placeholder="Example input placeholder">
						</div>
						<label class="font-weight-bold">Enable/Disable certain heading levels</label>
						<div class="form-group form-check mb-0" v-for="(level, index) in loptions.levels"  :key="index">
							<input type="checkbox" v-model="loptions.levels[index]" class="form-check-input">
							<label class="form-check-label">Heading {{index+1}}</label>
						</div>
					</form>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" @click="$emit('update:active', false)" data-dismiss="modal">Cancel</button>
					<button type="button" class="btn btn-primary" @click="$emit('update:options', loptions); $emit('update:active', false); $emit('saved');">Save</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import $ from 'jquery';

export default {
	name: 'learnsetOptionsModal',
	data(){
		return {
			loptions: {},
		};
	},
	props: {
		active: Boolean,
		options: Object,
	},
	watch: {
		active: function (newVal) {
			if(newVal) this.loptions = this.options;
			$('#learnsetOptionsModal').modal(newVal?'show':'hide');
		}
	},
	methods: {
	},
};
</script>
