import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartNum: 0,
  },
  mutations: {
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
    Huo() {}
  },
  modules: {}
});
