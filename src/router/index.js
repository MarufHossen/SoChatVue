import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Layout from "../views/Layout.vue";

import { createRouter, createWebHistory } from "vue-router";
import { watchEffect, ref } from "vue";
const user = localStorage.getItem("user");
ref(user);

watchEffect(user, () => {
  console.log("logged in ", user);
});

const routes = [
  { path: "/signup", component: Signup },
  { path: "/login", component: Login },
  { path: "/", component: Layout },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
