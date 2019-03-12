import Vuex from 'vuex'
import Vue from 'vue';
import userInfo from '@/stores/userInfo';
import counter from '@/stores/counter';
import logger from './plugins/logger';
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    userInfo,
    counter,
  },
  plugins: [logger],
})
