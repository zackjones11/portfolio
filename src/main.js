import Vue from "vue";
import App from "./App.vue";
import VuePrism from "vue-prism";

import "./variables.css";
import "./main.css";

Vue.use(VuePrism);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
