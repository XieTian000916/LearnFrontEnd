// 在该文件中创建整个应用的路由器
import VueRouter from "vue-router";

import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";

// 创建并暴露一个路由器
export default new VueRouter({
  routes: [
    {
      path: "/home",
      component: HomePage,
    },
    {
      path: "/about",
      component: AboutPage,
    },
  ],
});
