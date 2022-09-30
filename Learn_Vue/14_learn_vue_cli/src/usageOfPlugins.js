export default {
  install(Vue) {
    // 此处的参数Vue是生成vm的vue构造函数
    // 插件中可以定义全局指令、混入、过滤器，给vue原型添加方法

    // 定义全局过滤器
    Vue.filter("myslice", function (val) {
      return val.slice(0, 2);
    });

    // 定义全局指令

    // 定义混入
    Vue.mixin({
      data() {
        return {
          x: 100,
          y: 200,
        };
      },
    });

    // 给vue原型上添加一个方法
    Vue.prototype.hello = () => {
      alert("Hello!!!");
    };
  },
};

// 插件可以增强vue的功能
// 本质是包含install方法的一个对象，install的第一个参数是Vue构造函数，第二个及以后是coder传进的数据
/*
    定义插件： 
    对象.install = function(Vue, options...) {
        // 全局过滤器、全局指令、全局混入、添加实例方法......
    }

    使用插件：Vue.use(插件文件名)
*/
