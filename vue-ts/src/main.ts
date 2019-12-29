import Vue from "vue";
// import App from "./App.vue";
import Test1 from "./views/Test1.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(Test1)
}).$mount("#app");
