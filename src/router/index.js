import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Layout from "../views/Layout.vue";

import { getAuth, onAuthStateChanged } from "firebase/auth";

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
  {
    path: "/",
    component: Layout,
    // meta: {
    //   requiresAuth: true,
    //   },
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
};

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      console.log("You do not have any access!");
      next("/login");
    }
  } else {
    next();
  }
});

export default router;
