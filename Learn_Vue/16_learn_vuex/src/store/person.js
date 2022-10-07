export default {
  // vuex模块化：将namespaced的值调整为true
  namespaced: true,
  actions: {
    addperson(context, value) {
      console.log("action addperson is called");
      context.commit("ADDPERSON", value);
    },
  },
  mutations: {
    ADDPERSON(state, value) {
      console.log("mutation ADDPERSON is called");
      state.personlist.unshift(value);
    },
  },
  state: {
    personlist: [{ id: 1, name: "Zhangsan" }],
  },
  getters: {},
};
