import Vue from 'vue'
import App from './App.vue'
import Yptest from '../packages'

Vue.use(Yptest)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
