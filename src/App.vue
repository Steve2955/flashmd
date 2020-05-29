<template>
	<div id="app">
		<Sidebar @addLearnset="showAddLearnsetModal=true"/>
		<div id="content">
			<Header @onDeleteLearnset="deleteLearnset" @onEditLearnset="showEditLearnsetModal=true"/>
			<router-view @onDeleteLearnset="deleteLearnset" @addLearnset="showAddLearnsetModal=true"/>
		</div>
		<AddLearnsetModal :active.sync="showAddLearnsetModal"/>
		<EditLearnsetModal :active.sync="showEditLearnsetModal"/>
		<a class="github-fork-ribbon left-bottom fixed d-none d-md-block" href="https://github.com/Steve2955/flashmd" data-ribbon="Fork me on GitHub" title="Fork me on GitHub">Fork me on GitHub</a>
	</div>
</template>

<script>
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import AddLearnsetModal from '@/components/AddLearnsetModal';
import EditLearnsetModal from '@/components/EditLearnsetModal';

import { DELETE_LEARNSET } from '@/store/mutations.type';

export default {
	name: 'App',
	components: {
		Header,
		Sidebar,
		AddLearnsetModal,
		EditLearnsetModal,
	},
	data(){
		return {
			showAddLearnsetModal: false,
			showEditLearnsetModal: false,
		};
	},
	methods:{
		deleteLearnset: function(learnset){
			const sure = confirm(`The learnset '"${learnset.name}" will be deleted. Are you sure?`);
			if(!sure) return;
			if(this.$route.path !== '/') this.$router.push('/');
			this.$store.commit(DELETE_LEARNSET, learnset);
		},
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
