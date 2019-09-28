import Vue from 'vue'
import App from './App.vue'

import VueComposition from '@vue/composition-api'

Vue.use(VueComposition)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
