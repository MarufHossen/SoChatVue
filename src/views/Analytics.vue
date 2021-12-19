<template>
  <div class="analytics">
    <Header />
    <div class="container">
      <Sidebar />
      <div class="stats">
        <div class="overview"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Sidebar from "../components/Sidebar.vue";
export default {
  components: { Header, Sidebar },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "Roboto", sans-serif;
  height: 100vh;
}
.analytics {
  width: 100%;
  height: 100vh;
}
.container {
  width: 100%;
  display: flex;
  height: calc(100% - 5rem);
}
.stats {
  flex: 10;
  width: 100%;
  padding: 3rem;
  background-color: #f5f6fa;
}
</style>
