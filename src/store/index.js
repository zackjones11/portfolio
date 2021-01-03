import Vue from "vue";
import Vuex from "vuex";
import tabs from "./modules/tabs";

Vue.use(Vuex);

const DEBUG = process.env.NODE_ENV !== "production";

const store = new Vuex.Store({
  modules: {
    tabs,
  },
  strict: DEBUG,
});

export default store;
