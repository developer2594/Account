import { createStore } from "vuex";
import info from "./info";
import auth from "./auth";

export default createStore({
  state: {},
  mutations: {},
  getters: {},
  actions: {},
  modules: { auth, info },
});
