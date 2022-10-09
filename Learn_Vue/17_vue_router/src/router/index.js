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
      // 命名路由
      name: "Home",
      path: "/home",
      component: HomePage,
      // 多级路由配置children属性
      children: [
        {
          name: "News",
          // 子路由无需带斜杠
          path: "news",
          component: NewsPage,
        },
        {
          name: "Message",
          path: "message",
          component: MessagePage,
          children: [
            {
              name: "Detail",
              path: "detail",
              component: DetailPage,
              // 路由的props配置（帮助页面组件精简收参写法）
              // 写法一、props为对象，对象中所有的键值都会通过props传给指定页面组件
              // props:{a:666},
              // 写法二、设置props的值为true，路由会把收到的所有 !params! 参数通过props传给指定页面组件
              // props:true,
              // 写法三、函数写法（推荐）
              props($route) {
                return { id: $route.query.id, title: $route.query.title };
              },
            },
          ],
        },
      ],
    },
    {
      name: "About",
      path: "/about",
      component: AboutPage,
    },
  ],
});
