import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";
import learnset from './learnset.module';

Vue.use(Vuex);

export default new Vuex.Store({
	plugins: [createPersistedState({ paths: ['learnset.learnsets'] })],
	modules: {
		learnset,
	},
});
