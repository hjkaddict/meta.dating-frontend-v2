import Vue from "vue";
import App from "./App.vue";
import router from "./router";
require("@/assets/main.scss");

Vue.config.productionTip = false;

// register font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faArrowLeft);
Vue.component("font-awesome-icon", FontAwesomeIcon);

// register global function by mixin 
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
