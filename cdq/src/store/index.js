import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartNum: 0,
    username: 0,
  },
  mutations: {
    getusername(state, name) {
      state.username = name
    },
    huo(state, n) {
      state.cartNum = n;
    },
    add(state) {
      state.cartNum = state.cartNum + 1;
    },
    del(state, n) {
      state.cartNum = state.cartNum - n;
    }
  },
  actions: {
    del(context, len) {
      context.commit('del', len)
    }
  },
  modules: {}
});
