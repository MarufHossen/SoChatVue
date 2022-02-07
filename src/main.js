import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCsd2auDToUd0l0OLkwHJ6bQ9sPUioQAcE",
  authDomain: "so-chat-vue.firebaseapp.com",
  projectId: "so-chat-vue",
  storageBucket: "so-chat-vue.appspot.com",
  messagingSenderId: "574230030392",
  appId: "1:574230030392:web:45d86377c239c08bba5ecd",
};

const mainApp = initializeApp(firebaseConfig);
const auth = getAuth(mainApp);
const db = getFirestore(mainApp);

export { auth, db };

const app = createApp(App);
app.use(router);
app.mount("#app");
