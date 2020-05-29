import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '../views/Dashboard.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Dashboard',
		component: Dashboard,
	},
	{
		path: '/learn/:id',
		name: 'Learn',
		component: () => import('../views/Learn.vue'),
	},
	{
		path: '/learnset/:id',
		name: 'LearnsetOverview',
		component: () => import('../views/LearnsetOverview.vue'),
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
