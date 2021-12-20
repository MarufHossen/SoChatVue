import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Homepage from "../views/Homepage.vue";
import Integration from "./../views/Integration.vue";
import Analytics from "./../views/Analytics.vue";

import { createRouter, createWebHistory } from "vue-router";
import { watchEffect, ref } from "vue";
const user = localStorage.getItem("user");
ref(user);

watchEffect(user, () => {
  console.log("logged in ", user);
});

const routes = [
  { path: "/signup", component: user ? Homepage : Signup },
  { path: "/login", component: user ? Homepage : Login },
  { path: "/", name: "home", component: !user ? Login : Homepage },
  { path: "/integration", component: user ? Integration : Login },
  { path: "/analytics", component: user ? Analytics : Login },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
