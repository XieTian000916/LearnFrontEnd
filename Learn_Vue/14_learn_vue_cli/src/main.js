import Vue from "vue";
import App from "./App.vue";
// 引入elementUI
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

// 在此进行全局混入
import { hunru } from "./mixin";
import usageOfPlugins from "./usageOfPlugins";

Vue.config.productionTip = false;

// 在此应用 vm,vc全局可用
Vue.mixin(hunru);

// 使用插件
Vue.use(usageOfPlugins);
Vue.use(ElementUI);

new Vue({
  el: "#app",
  render: (h) => h(App),
  beforeCreate() {
    // 借助生命周期钩子安装全局事件总线
    Vue.prototype.$bus = this;
  },
});
