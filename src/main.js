// to-do

//design semester (choosebot) view

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
export const bus = new Vue();
require("@/assets/main.scss");

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
