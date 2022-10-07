import Vue from "vue";
import App from "./App.vue";
import vueRouter from "vue-router";
import router from "./router/index";

Vue.config.productionTip = false;

Vue.use(vueRouter);

new Vue({
  render: (h) => h(App),
  router: router,
}).$mount("#app");
