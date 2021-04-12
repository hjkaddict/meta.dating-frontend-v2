import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import Team from "../views/Team.vue";
import Imprint from "../views/Imprint.vue";
import Login from "../views/Login.vue";
import Bots from "../views/Bots.vue"
import Chat from "../views/Chat.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/team",
    component: Team,
  },
  {
    path: "/imprint",
    component: Imprint,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/bots/:id",
    component: Bots
  },
  {
    path: "/chat",
    component: Chat
  }
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
