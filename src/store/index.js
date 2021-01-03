import Vue from "vue";
import Vuex from "vuex";
import tabs from "./modules/tabs";
import viewport from "./modules/viewport";

Vue.use(Vuex);

const DEBUG = process.env.NODE_ENV !== "production";

const store = new Vuex.Store({
  modules: {
    tabs,
    viewport,
  },
  strict: DEBUG,
});

export default store;
