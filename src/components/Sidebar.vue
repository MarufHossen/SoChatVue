<template>
  <div class="sidebar">
    <div class="sidebar-wrapper">
      <div class="sidebarMenu">
        <h3 class="sidebar-title">Dashboard</h3>
        <hr />
        <router-link to="/signup">
          <div class="sidebar-link"><i class="fas fa-home icon"></i>Home</div>
        </router-link>
        <router-link to="/analytics">
          <div class="sidebar-link">
            <i class="fas fa-chart-line icon"></i>Analytics
          </div>
        </router-link>
        <router-link to="/integration">
          <div class="sidebar-link">
            <i class="fas fa-wifi icon"></i>Integration
          </div>
        </router-link>

        <router-link to="/signup">
          <div class="sidebar-link"><i class="fas fa-rss icon"></i>Feeds</div>
        </router-link>
        <router-link to="/signup">
          <div class="sidebar-link">
            <i class="fas fa-mail-bulk icon"></i>Posts
          </div>
        </router-link>
        <router-link to="/signup">
          <div class="sidebar-link">
            <i class="fas fa-cog icon"></i>Settings
          </div>
        </router-link>
        <router-link to="/login">
          <div class="sidebar-link" @click="logout">
            <i class="fas fa-sign-out-alt icon"></i>logout
          </div>
        </router-link>
      </div>
      <div class="sidebarMenu">
        <h3 class="sidebar-title">Notifications</h3>
        <hr />
        <router-link to="/signup">
          <div class="sidebar-link">
            <i class="fas fa-envelope icon"></i>Mail
          </div>
        </router-link>
        <router-link to="/signup">
          <div class="sidebar-link">
            <i class="far fa-comment-dots icon"></i>Feedbacks
          </div>
        </router-link>
        <router-link to="/">
          <div class="sidebar-link">
            <i class="fas fa-comment-alt icon"></i>Messages
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logout: () => {
      localStorage.removeItem("user");
      this.$forceUpdate();
    },
  },
};
</script>

<style>
* {
  text-decoration: none;
}
.sidebar {
  background-color: white; /* #f5f6fa */
  flex: 2;
  position: sticky;
  top: 0;
  padding: 2rem;
}
.sidebarMenu {
  margin-top: 1rem;
}
.sidebar-title {
  font-size: 1.6rem;
  color: rgb(187, 186, 186);
  margin-bottom: 1rem;
}
.sidebar-link {
  padding: 1.2rem 0;
  font-size: 1.5rem;
  text-decoration: none;
  color: black;
}
.sidebar-link .icon {
  margin-right: 1rem;
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
