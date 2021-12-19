<template>
  <div class="sidebar">
    <div class="menu-items">
      <router-link to="/chatdashboard" class="chat">Chat Dashboard</router-link>
    </div>
    
  </div>
</template>

<script>
export default {};
</script>

<style>
.chat{
  text-decoration: none;
  color: #2f4f4f;
}
.sidebar {
  background-color: white; /* #f5f6fa */
  flex: 2;
  display: flex;
  font-style: none;
  text-decoration: none;
  color: #2f4f4f;
}
.menu-items {
  display: flex;
  flex-direction: column;
  padding: 20px;
  font-size: 1.6rem;
  font-family: "Franklin Gothic Medium";
  text-decoration: none;
  color: #2f4f4f;
}

.side-btn {
  border: none;
  padding: 16px 0px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  color: white;
  background-color: transparent;
}
.side-btn:focus {
  outline: none;
}
.side-btn.active {
  position: relative;
  background-color: white;
  color: teal;
  font-weight: 600;
  margin-left: 10px;
  border-radius: 30px 0 0 30px;
}
.side-btn.active::before {
  top: -30px;
}
.side-btn.active::after {
  bottom: -30px;
}
.side-btn.active::before,
.side-btn.active::after {
  position: absolute;
  content: "";
  right: 0;
  height: 30px;
  width: 30px;
  background-color: white;
}
.side-btn.active .link-container::before {
  top: -60px;
}
.side-btn.active .link-container::after {
  bottom: -60px;
  z-index: 99;
}
.side-btn.active .link-container::before,
.side-btn.active .link-container::after {
  position: absolute;
  content: "";
  right: 0px;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background-color: teal;
}
</style>
