import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import {
  checkArray
} from './common/array'
import global from "./components/global"

Vue.config.productionTip = false;

Vue.directive("display-key", {
    inserted(el, binding) {
      let displayKey = binding.value;

      if (displayKey) {
        let hasPermission = checkArray(displayKey)
        // 如果没有权限 删除dom节点
        if (!hasPermission) {
          el.parentNode && el.parentNode.removeChild(el)
        }
      } else {
        throw new Error('需要key值')
      }
    }
  }
);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app")