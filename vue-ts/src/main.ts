import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router/index"


import { Component } from 'vue-property-decorator';

Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate',
]);

Vue.config.productionTip = false;

const vm =new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
