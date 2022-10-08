// 在该文件中创建整个应用的路由器
import VueRouter from "vue-router";

import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import MessagePage from "../pages/MessagePage";
import NewsPage from "../pages/NewsPage";
import DetailPage from "../pages/DetailPage";

// 创建并暴露一个路由器
export default new VueRouter({
  routes: [
    {
      path: "/home",
      component: HomePage,
      // 多级路由配置children属性
      children: [
        {
          // 子路由无需带斜杠
          path: "news",
          component: NewsPage,
        },
        {
          path: "message",
          component: MessagePage,
          children: [
            {
              path: "detail",
              component: DetailPage,
            },
          ],
        },
      ],
    },
    {
      path: "/about",
      component: AboutPage,
    },
  ],
});
