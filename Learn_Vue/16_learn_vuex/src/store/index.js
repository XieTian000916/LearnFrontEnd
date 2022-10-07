// 该文件用于创建Vuex中最为核心的store

import Vue from "vue";
import Vuex from "vuex";

// 应用Vuex插件
Vue.use(Vuex);

// 准备actions——用于响应组件中的动作
const actions = {
  plus(context, value) {
    console.log("action plus is called");
    context.commit("PLUS", value);
  },
  minus(context, value) {
    console.log("action minus is called");
    context.commit("MINUS", value);
  },
  addperson(context, value) {
    console.log("action addperson is called");
    context.commit("ADDPERSON", value);
  },
};
// 准备mutations——用于操作数据（state）
const mutations = {
  PLUS(state, value) {
    console.log("mutation PLUS is called");
    state.sum += value;
  },
  MINUS(state, value) {
    console.log("mutation MINUS is called");
    state.sum -= value;
  },
  ADDPERSON(state, value) {
    console.log("mutation ADDPERSON is called");
    state.personlist.unshift(value);
  },
};
// 准备state——用于存储数据
const state = {
  sum: 0,
  lang: "Vue.js",
  personlist: [{ id: 1, name: "Zhangsan" }],
};

// 当state中的数据需要经过加工后再使用，且逻辑复杂需要复用，可以使用getters配置项
const getters = {
  // 使用方法类似于computed计算属性
  bigSum(state) {
    return state.sum * 2 * 5;
  },
};

// 创建并暴露store
export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters,
});
