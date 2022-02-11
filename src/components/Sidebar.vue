<template>
  <div class="sidebar">
    <div class="logo">
      <h2 class="text-xl py-1 mb-8 border-b-2 border-gray-200">So Chat</h2>
    </div>
    <div class="sidebar-menu">Public Chat</div>
    <div class="sidebar-menu" @click="handleSignOut" v-if="isLoggedIn">
      Signout
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "../main";
import { useRouter } from "vue-router";
import { updateDoc, doc } from "@firebase/firestore";

const router = useRouter();
const isLoggedIn = ref(false);
onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});

const handleSignOut = async () => {
  try {
    await signOut(auth);
    router.push("/login");
  } catch (error) {
    console.log(error);
  }
};
</script>

<style scoped>
.sidebar {
  grid-area: sidebar;
  /* background-color: rgb(255, 196, 0); */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  background-color: white;
}

.logo {
  /* height: px; */
  width: 120px;
  padding: 10px;
  object-fit: contain;
}

.sidebar-menu {
  width: 95%;
  height: 50px;
  padding-left: 10px;
  padding-right: 10px;
  color: #515151;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 16px;
}
.sidebar-menu:hover {
  background-color: #e5e5e5;
  border-radius: 3px;
}
</style>
