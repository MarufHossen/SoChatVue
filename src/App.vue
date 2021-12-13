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
import Header from "./components/Header.vue";
import Sidebar from "./components/Sidebar.vue";
import ChatDashboard from "./components/ChatDashboard.vue";

export default {
  name: "App",
  components: { Header, Sidebar, ChatDashboard },
};
</script>

<style>
html {
  font-size: 100%;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "Roboto", sans-serif;
  background: linear-gradient(to right, #ffafbd, #ffc3a0);
  height: 100vh;
}
.app {
  width: 100%;
  margin: 0;
  
  height: 70rem;
  color: white;
}
.container {
  display: flex;
  height: calc(100% - 5rem);
}
</style>
