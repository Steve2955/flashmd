<template>
	<div class="card bg-dark border border-secondary mb-3">
		<div class="card-body">
			<h5 class="card-title">Your Progress</h5>
			<canvas id="progressChart" class="my-3"></canvas>
		</div>
	</div>
</template>

<script>
import 'chart.js';

export default {
	name: 'LearnsetListItem',
	props: {
		learnset: Object,
	},
	methods: {
		createChart: function(){
			const ctx = document.getElementById('progressChart').getContext('2d');
			const config = {
				type: 'pie',
				data: {
					labels: ['Unknown', 'Learning', 'Known'],
					datasets: [{
						borderColor: '#121212',
						backgroundColor: [
							'#F44336',
							'#FFEB3B',
							'#4CAF50',
						],
						data: [(this.learnset.cards.filter(c => !c.stage || c.stage == 0)).length, (this.learnset.cards.filter(c => c.stage == 1)).length, (this.learnset.cards.filter(c => c.stage > 1)).length],
					}],
				},
				options: {
					legend: {
						position: 'bottom',
					},
				},
			};
			// eslint-disable-next-line
			this.chart = new Chart(ctx, config);
		}
	},
	mounted(){
		this.createChart();
	},
	watch:{
		learnset: function(){
			this.createChart();
		},
	},
};
</script>
