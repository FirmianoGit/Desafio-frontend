import { createRouter, createWebHistory } from 'vue-router'
import store from "@/store";
import Home from "@/views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/",
    name: "SignIn",
    component:() =>import ('@/views/SignIn.vue'), 
    beforeEnter: (to, from, next) => {
      store.state.user.isLoggedIn ? next({ name: "UserAccount" }) : next();
    },
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
    component: () => import( '../components/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
