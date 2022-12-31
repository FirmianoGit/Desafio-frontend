import store from "@/store";
import Home from "@/views/Home.vue";
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: () => import( '../views/SignUp.vue'),
    beforeEnter: (to, from, next) => {
      store.state.user.isLoggedIn ? next({ name: "UserAccount" }) : next();
    },
  },
  {
    path: "/account",
    name: "UserAccount",
    component: () => import( '../views/UserAccount.vue'),
    beforeEnter: (to, from, next) => {
      store.state.user.isLoggedIn ? next() : next({ name: "Home" });
    },
  },
  {
    path: "/:pathMatch(.*)*",
    beforeEnter: (to, from, next) => {
      next("/");
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
