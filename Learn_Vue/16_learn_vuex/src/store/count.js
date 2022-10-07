export default {
  // vuex模块化：将namespaced的值调整为true
  namespaced: true,
  actions: {
    plus(context, value) {
      console.log("action plus is called");
      context.commit("PLUS", value);
    },
    minus(context, value) {
      console.log("action minus is called");
      context.commit("MINUS", value);
    },
  },
  mutations: {
    PLUS(state, value) {
      console.log("mutation PLUS is called");
      state.sum += value;
    },
    MINUS(state, value) {
      console.log("mutation MINUS is called");
      state.sum -= value;
    },
  },
  state: {
    sum: 0,
    lang: "Vue.js",
  },
  getters: {
    bigSum(state) {
      return state.sum * 2 * 5;
    },
  },
};
