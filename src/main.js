import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import store from './store';
import 'bootstrap';
import './assets/app.scss';
import 'katex/dist/katex.min.css';

import router from './router';
import Init from './common/init';

Vue.config.productionTip = false;

Init.init();

new Vue({
	store,
	router,
	render: h => h(App),
}).$mount('#app');
