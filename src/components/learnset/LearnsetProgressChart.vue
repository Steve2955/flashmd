<template>
	<div class="card bg-dark border border-secondary mb-3">
		<div class="card-body">
			<h5 v-if="title" class="card-title">{{title}}</h5>
			<canvas id="progressChart" class="my-3"></canvas>
		</div>
	</div>
</template>

<script>
import 'chart.js';

export default {
	name: 'LearnsetListItem',
	data(){
		return {
			chart: undefined,
			config: undefined,
		};
	},
	props: {
		progress: Object,
		title: String,
	},
	methods: {
		createChart: function(){
			const ctx = document.getElementById('progressChart').getContext('2d');
			this.config = {
				type: 'pie',
				data: {
					labels: ['Unknown', 'Learning', 'Known'],
					datasets: [{
						borderColor: '#121212',
						backgroundColor: [ '#F44336', '#FFEB3B', '#4CAF50' ],
						data: [ this.progress.unknown, this.progress.learning, this.progress.known ],
					}],
				},
				options: {
					maintainAspectRatio: false,
					legend: {
						position: 'bottom',
					},
				},
			};
			// eslint-disable-next-line
			this.chart = new Chart(ctx, this.config);
		}
	},
	mounted(){
		this.createChart();
	},
	watch:{
		progress: function(newProgress){
			this.config.data.datasets[0].data = [ newProgress.unknown, newProgress.learning, newProgress.known ];
			this.chart.update();
		},
	},
};
</script>

<style scoped>
#progressChart{
	max-height: 15rem;
}
</style>
