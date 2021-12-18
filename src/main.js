import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'leaflet/dist/leaflet.css';

Vue.config.productionTip = false

new Vue({
  store,
  router,
  ...App
}).$mount('#app')
