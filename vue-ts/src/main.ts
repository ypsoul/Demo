import Vue from "vue";
// import App from "./App.vue";
import Test1 from "./views/Test1.vue";
import store from "./store"

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(Test1)
}).$mount("#app");
