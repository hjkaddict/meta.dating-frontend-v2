import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueScreen from "vue-screen";

require("@/assets/main.scss");

Vue.config.productionTip = false;

//vue-screen
Vue.use(VueScreen);

//socket.io
import VueSocketIOExt from "vue-socket.io-extended";
import { io } from "socket.io-client";
const socket = io("https://www.metathema.net");
Vue.use(VueSocketIOExt, socket);

// uuid
import { v4 as uuidv4 } from "uuid";
Object.defineProperty(Vue.prototype, "$uuidv4", { value: uuidv4 });

// register font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowLeft,
  faEllipsisH,
  faBackward,
  faPlay,
  faPause,
  faInfoCircle,
  faMinusCircle,
  faPlusCircle,
  faChevronCircleDown,
  faTrash,
  faEdit,
  faBars,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faArrowLeft,
  faEllipsisH,
  faBackward,
  faPlay,
  faPause,
  faInfoCircle,
  faMinusCircle,
  faPlusCircle,
  faChevronCircleDown,
  faTrash,
  faEdit,
  faBars,
  faTimes
);
Vue.component("font-awesome-icon", FontAwesomeIcon);

// register global function by mixin
Vue.mixin({
  methods: {
    isMobile() {
      // if (
      //   /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      //     navigator.userAgent
      //   )
      // )
      //   return true;
      // else return false;

      if (this.$screen.width <= 1023) {
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
