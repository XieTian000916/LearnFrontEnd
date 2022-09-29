import Vue from "vue";
import App from "./App.vue";
// 在此进行全局混入
import { hunru } from "./mixin";

Vue.config.productionTip = false;
// 在此应用 vm,vc全局可用
Vue.mixin(hunru);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
