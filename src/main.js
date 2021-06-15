import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
// import moment from 'moment'

Vue.config.productionTip = false
Vue.use(VueMaterial)

const app = new Vue({
  render: h => h(App),
})

app.$mount('#app')

/*
app.$config.globalProperties.$filters = {
  dateFormat(value) {
    return moment(value).format('dd/MM/yyyy')
  }
}*/