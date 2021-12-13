<template>
  <div class="chat-dashboard">
    <h2>Chat</h2>
    <div class="chat-box">
      <div class="users">
        <div class="user" v-for="user in users" v-bind:key="user.id">
          <div class="user-img-box">
            <img v-bind:src="user.image" alt="" class="user-img" />
          </div>
          <div class="user-info">
            <p class="user-name">{{ user.name }}</p>
            <p class="source">
              from <span v-bind:class="user.source">{{ user.source }}</span>
            </p>
            <p class="user-message">{{ user.message }}</p>
          </div>
        </div>
      </div>
      <div class="messages">
        <div class="heading">
          <div class="heading-img-box">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
              class="heading-img"
            />
          </div>
          <p class="heading-name">Jane Doe</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import users from "./../userinfo";
export default {
  data() {
    return {
      users: users,
    };
  },
};
</script>

<style>
.chat-dashboard {
  background-color: #f5f6fa;
  flex: 10;
  padding: 3rem;
}
.chat-box {
  display: flex;
  margin-top: 2rem;
  height: 90%;
}
.users {
  flex: 3;
  margin-right: 1rem;
  overflow: scroll;
  scrollbar-width: none;
}
.messages {
  background-color: white;
  flex: 9;
  padding: 1rem;
}
.user {
  color: #000;
  display: flex;
  padding: 1rem;
  background-color: #fdfdfde0;
  cursor: pointer;
}
.user:hover {
  background-color: #d3cece;
}
.user:not(:last-child) {
  margin-bottom: 0.2rem;
}
.user-img-box {
  position: relative;
  width: 5rem;
  height: 5rem;
  overflow: hidden;
  border-radius: 50%;
  margin-right: 1rem;
}
.user-img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.user-name {
  font-weight: bold;
  font-size: 1.6rem;
}
.source {
  font-size: 1.4rem;
}
.instagram {
  background: linear-gradient(#f58529, #feda77, #dd2a7b, #8134af, #515bd4);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
.facebook {
  color: #3b5998;
}
.twitter {
  color: #00acee;
}
.user-message {
  font-size: 1.2rem;
  color: #777;
}
.heading {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 0.5rem 0;
}
.heading-img-box {
  position: relative;
  width: 5rem;
  height: 5rem;
  overflow: hidden;
  border-radius: 50%;
  margin-right: 1rem;
}
.heading-img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
