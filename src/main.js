import Vue from "vue";
import App from "./App.vue";
import router from "./router";
require("@/assets/main.scss");

Vue.config.productionTip = false;

import { v4 as uuidv4 } from "uuid";
Object.defineProperty(Vue.prototype, "$uuidv4", { value: uuidv4 });

// register font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowLeft,
  faDownload,
  faBackward,
  faPlay,
  faInfoCircle,
  faPlusCircle,
  faChevronCircleDown,
  faTrash,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faArrowLeft,
  faDownload,
  faBackward,
  faPlay,
  faInfoCircle,
  faPlusCircle,
  faChevronCircleDown,
  faTrash,
  faEdit
);
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

//register pretty-checkbox
import PrettyCheck from "pretty-checkbox-vue/check";
Vue.component("p-check", PrettyCheck);

//eventBus
export const eventBus = new Vue();



new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
