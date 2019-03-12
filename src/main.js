import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './stores'
import Counter from './components/Counter';
import VueResource from 'vue-resource';

Vue.use(VueResource);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  components: { Counter },
  render: h => h(App)
  // h == createElement
}).$mount('#app')
