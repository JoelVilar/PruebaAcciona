import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import router from './router/router'
import VueGeolocation from 'vue-browser-geolocation'
import * as VueGoogleMaps from 'vue2-google-maps';

Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.use(VueGeolocation)
Vue.use(VueGoogleMaps, {
  load: {
    key: ''
  }
})
const app = new Vue({
  router,
  render: h => h(App),
})

app.$mount('#app')
