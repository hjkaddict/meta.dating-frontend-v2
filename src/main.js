import Vue from "vue";
import App from "./App.vue";
import router from "./router";
require("@/assets/main.scss");

Vue.config.productionTip = false;
Vue.mixin({
  methods: {
    isMobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
});
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
