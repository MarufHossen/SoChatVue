<script setup>
import { ref } from "vue";
import Header from "../components/Header.vue";
import Sidebar from "../components/Sidebar.vue";
import Content from "../components/Content.vue";
import Footer from "../components/Footer.vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <div class="s-container">
    <Header />
    <Sidebar />
    <Content />
    <Footer />
  </div>
</template>

<style scoped>
.s-container {
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 50px auto 50px;
  grid-template-areas:
    "sidebar sidebar header header header header header header header header header header"
    "sidebar sidebar main_content main_content main_content main_content main_content main_content main_content main_content main_content main_content"
    "sidebar sidebar footer footer footer footer footer footer footer footer footer footer";
}
</style>
