import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/views/Home";
import Team from "@/views/Team";
import Imprint from "@/views/Imprint";
import Login from "@/views/Login";
import Dashboard from "@/views/Dashboard";
import DashboardHome from "@/components/Dashboard/DashboardHome";
import Bots from "@/views/Bots";
import Chat from "@/views/Chat";
import AddbotForm from "@/components/Dashboard/AddbotForm";
import EditBot from "@/components/Dashboard/EditBotForm";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/project",
    name: "home",
    component: Home,
  },
  {
    path: "/project",
    component: Home,
  },
  {
    path: "/project/:id",
    component: Bots,
  },
  {
    path: "/chat/:base64",
    name: "chat",
    component: Chat,
    props: true,
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
    name: "login",
    component: Login,
  },
  {
    path: "/logout",
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("accessToken")) {
        localStorage.removeItem("accessToken");
        next({ name: "home" });
      } else {
        next();
      }
    },
  },
  {
    path: "/chat",
    redirect: "/",
  },
  {
    path: "/dashboard",
    name: "dashboard",
    redirect: "/dashboard/home",
    component: Dashboard,
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem("accessToken")) {
        next("login");
      } else {
        next();
      }
    },

    children: [
      { path: "home", component: DashboardHome },
      { path: "addbot", component: AddbotForm },
      {
        path: "edit/:id",
        name: "edit",
        component: EditBot,
        props: true,
        beforeRouteEnter: (to, from, next) => {
          if (!localStorage.getItem("accessToken")) {
            next("login");
          } else {
            next();
          }
        },
      },
    ],
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
