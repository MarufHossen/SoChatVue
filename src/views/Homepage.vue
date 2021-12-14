<template>
  <div class="app">
    <Header />
    <div class="container">
      <Sidebar />
      <ChatDashboard />
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Sidebar from "../components/Sidebar.vue";
import ChatDashboard from "../components/ChatDashboard.vue";

export default {
  name: "App",
  components: { Header, Sidebar, ChatDashboard },
};
</script>

<style>
html {
  font-size: 62.5%;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "Roboto", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.app {
  width: 100vw;
  height: 100vh;
}
.container {
  display: flex;
  height: calc(100% - 5rem);
}
</style>
