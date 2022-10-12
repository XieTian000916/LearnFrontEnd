// 不再引入Vue构造函数，而是一个名为createApp的工厂函数
import { createApp } from "vue";
import App from "./App.vue";

// 创建应用实例对象，类似于2中的vm，但比之精简
createApp(App).mount("#app");
