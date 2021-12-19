<template>
  <div class="integration">
    <Header />
    <div class="container">
      <Sidebar />
      <div class="socials">
        <h3>Connect you social media pages</h3>
        <hr />
        <div class="social-wrapper">
          <div class="social-box">
            <div class="logo-wrapper">
              <img src="./../assets/facebook.png" alt="" />
            </div>
            <button class="btn">connect</button>
          </div>
          <div class="social-box">
            <div class="logo-wrapper">
              <img src="./../assets/instagram.png" alt="" />
            </div>
            <button class="btn">connect</button>
          </div>
          <div class="social-box">
            <div class="logo-wrapper">
              <img src="./../assets/twitter.png" alt="" />
            </div>
            <button class="btn">connect</button>
          </div>

          <p>More coming soon ...</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Sidebar from "../components/Sidebar.vue";
export default {
  components: { Sidebar, Header },
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
.integration {
  width: 100%;
  height: 100vh;
}
.container {
  width: 100%;
  display: flex;
  height: calc(100% - 5rem);
}
.socials {
  flex: 10;
  width: 100%;
  padding: 3rem;
  background-color: #f5f6fa;
}
.socials h3 {
  font-size: 3rem;
  margin-bottom: 1rem;
}
.social-wrapper {
  display: flex;
  margin-top: 2rem;
}
.social-wrapper p {
  font-size: 1.6rem;
  align-self: flex-end;
}
.social-box {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
}
.logo-wrapper {
  position: relative;
  width: 100px;
  height: 100px;
  margin-bottom: 1rem;
}
.logo-wrapper img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.btn {
  padding: 1rem 1.4rem;
  background-color: #000;
  color: #fff;
  outline: none;
  cursor: pointer;
  border: none;
}
</style>
