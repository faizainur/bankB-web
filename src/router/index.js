import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AuthCallback from "../views/AuthCallback";
import CreditProfile from "../views/CreditProfile";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/credit/profile",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CreditProfile.vue"),
  },
  {
    path: "/credit/application",
    name: "Apply",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CreditApply.vue"),
  },
  {
    path: "/credit/review",
    name: "CreditReview",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CreditReview.vue"),
  },
  {
    path: "/auth/callback",
    name: "Login",
    component: AuthCallback,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
