import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";

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
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
