import Vue from "vue";
import App from "./App.vue";

// 在此进行全局混入
import { hunru } from "./mixin";
import usageOfPlugins from "./usageOfPlugins";

Vue.config.productionTip = false;

// 在此应用 vm,vc全局可用
Vue.mixin(hunru);

// 使用插件
Vue.use(usageOfPlugins);

new Vue({
  el: "#app",
  render: (h) => h(App),
  beforeCreate() {
    // 借助生命周期钩子安装全局事件总线
    Vue.prototype.$bus = this;
  },
});
