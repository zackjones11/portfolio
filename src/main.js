import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

import "./variables.css";
import "./main.css";

Vue.config.productionTip = false;

const registerGlobalComponents = (components) => {
  components.keys().forEach((key) => {
    const name = key.match(/([a-z0-9]+)\./i)[1];
    Vue.component(name, components(key).default);
  });
};
const components = require.context(
  "./components",
  true,
  /Base[a-z0-9]+\.(vue)$/i
);

registerGlobalComponents(components);

new Vue({
  render: (h) => h(App),
  store,
  router,
  components: { App },
}).$mount("#app");
