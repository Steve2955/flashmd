import Vue from 'vue';
import Vuex from 'vuex';
import learnset from './learnset.module';


Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		learnset,
	},
});
