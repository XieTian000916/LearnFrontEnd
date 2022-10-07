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
};
// 准备state——用于存储数据
const state = {
  sum: 0,
};

// 创建并暴露store
export default new Vuex.Store({
  actions,
  mutations,
  state,
});
