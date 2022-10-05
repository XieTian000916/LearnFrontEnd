const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // 开启代理服务器
  // 方法一
  // devServer: {
  //   proxy: "http://localhost:5000",
  // },
  /* 方法一配置简单，但是不能配置多个代理，且不能控制是否走代理 */
  // 方法二
  devServer: {
    proxy: {
      "/learnvue": {
        target: "http://localhost:5000",
        pathRewrite: { "^/learnvue": "" }, // 重写路径
        ws: true, // 用于支持websocket
        changeOrigin: true, // 用于改变请求源，将改变为服务器同一端口（用于控制请求头中的host值）
      },
      // "/foo": {
      //   target: "<other_url>",
      // },
    },
  },
});
