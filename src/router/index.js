import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Homepage from "../views/Homepage.vue";
<<<<<<< HEAD
import Integration from "./../views/Integration.vue";
import Analytics from "./../views/Analytics.vue";
=======
import ChatDashboard from "../components/ChatDashboard.vue";
>>>>>>> 7ceaf0c51b6163ac368ea7f24cfb0c48a6ccb9ff

import { createRouter, createWebHistory } from "vue-router";
import { watchEffect, ref } from "vue";
const user = localStorage.getItem("user");
ref(user);

watchEffect(user, () => {
  console.log("logged in ", user);
});

const routes = [
<<<<<<< HEAD
  { path: "/signup", component: user ? Homepage : Signup },
  { path: "/login", component: user ? Homepage : Login },
  { path: "/", name: "home", component: !user ? Login : Homepage },
  { path: "/integration", component: user ? Integration : Login },
  { path: "/analytics", component: user ? Analytics : Login },
=======
    { path: "/signup", component: Signup },
    { path: "/login", component: Login },
    { path: "/", component: Homepage },
    { path: "/chatdashboard", component: ChatDashboard }
>>>>>>> 7ceaf0c51b6163ac368ea7f24cfb0c48a6ccb9ff
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;