<template>
	<div id="editLearnsetModal" class="modal" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog">
		<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">Edit Learnset</h5>
				</div>
				<div class="modal-body">
					<form class="container">
						<div class="form-group">
							<label class="font-weight-bold">Name</label>
							<input v-if="learnset" type="text" v-model="learnset.name" class="form-control" placeholder="Learnset Name">
						</div>
					</form>
				</div>
				<div class="modal-footer mx-3">
					<button type="button" class="btn btn-outline-danger mr-auto" @click="resetProgress">Reset Progress</button>
					<button type="button" class="btn btn-secondary" @click="$emit('update:active', false)" data-dismiss="modal">Cancel</button>
					<button type="button" class="btn btn-primary" @click="updateLearnset">Save</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import $ from 'jquery';
import { UPDATE_LEARNSET, RESET_PROGRESS_LEARNSET } from '@/store/mutations.type';

export default {
	name: 'EditLearnsetModal',
	data(){
		return {
			learnset: undefined,
		};
	},
	props: {
		active: Boolean,
	},
	watch: {
		active: function (newVal) {
			if(newVal) this.learnset = Object.assign({}, this.$store.getters.learnset);
			$('#editLearnsetModal').modal(newVal?'show':'hide');
		},
	},
	methods: {
		updateLearnset: function(){
			this.$store.commit(UPDATE_LEARNSET, this.learnset);
			this.$emit('update:active', false);
		},
		resetProgress: function(){
			const sure = confirm(`All of your progress in this learnset will be reset. Are you sure?`);
			if(!sure) return;
			this.$store.commit(RESET_PROGRESS_LEARNSET);
			this.$emit('update:active', false);
		}
	},
};
</script>
