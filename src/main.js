import Vue from 'vue'
import App from './App.vue'
// import moment from 'moment'

Vue.config.productionTip = false


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