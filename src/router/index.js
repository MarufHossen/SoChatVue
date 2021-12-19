import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Homepage from "../views/Homepage.vue";
import ChatDashboard from "../components/ChatDashboard.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
    { path: "/signup", component: Signup },
    { path: "/login", component: Login },
    { path: "/", component: Homepage },
    { path: "/chatdashboard", component: ChatDashboard }
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;