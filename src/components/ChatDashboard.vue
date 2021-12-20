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
        <div class="message-wrapper">
          <!-- <div
            class="message-box active-user"
            v-for="(chat, index) in messagesList"
            v-bind:key="index"
          >
            <div class="user-img-box active-user">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt=""
                class="user-img"
              />
            </div>
            <div class="message active-user">{{ chat.message }}</div>
            <span class="time active-user">3.15PM</span>
          </div> -->
          <div
            class="message-box active-user"
            v-for="(chat, index) in messagesList"
            v-bind:key="index"
          >
            <div class="user-mg-img-box active-user">
              <img
                src="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                alt=""
                class="user-mg-img"
              />
            </div>
            <div class="message active-user">
              {{ chat.message }}
            </div>
            <span class="time active-user">3.15PM</span>
          </div>
          <!-- <div class="message-box active-user">
            <div class="user-mg-img-box active-user">
              <img
                src="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                alt=""
                class="user-mg-img"
              />
            </div>
            <div class="message active-user">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
              sequi.
            </div>
            <span class="time active-user">3.15PM</span>
          </div>
          <div class="message-box">
            <div class="user-img-box">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt=""
                class="user-img"
              />
            </div>
            <div class="message">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
              sequi.
            </div>
            <span class="time">3.15PM</span>
          </div>
          <div class="message-box active-user">
            <div class="user-mg-img-box active-user">
              <img
                src="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                alt=""
                class="user-mg-img"
              />
            </div>
            <div class="message active-user">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reiciendis nobis quod animi nulla maxime quia sunt mollitia
              repellat. Error ea sed illum ab non assumenda incidunt ad fugit
              cupiditate. Blanditiis nesciunt, omnis veritatis eos iusto at
              voluptatem laudantium officiis modi.
            </div>
            <span class="time active-user">3.15PM</span>
          </div>
          <div class="message-box">
            <div class="user-img-box">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt=""
                class="user-img"
              />
            </div>
            <div class="message">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
              sequi.
            </div>
            <span class="time">3.15PM</span>
          </div>
          <div class="message-box">
            <div class="user-img-box">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt=""
                class="user-img"
              />
            </div>
            <div class="message">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
              sequi.
            </div>
            <span class="time">3.15PM</span>
          </div> -->
        </div>
        <div class="message-sendbox">
          <input
            type="text"
            placeholder="Type a message"
            v-model="newMsgText"
          />
          <button @click="addNewMsg" class="send">send</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import users from "./../userinfo";

import { computed, ref } from "vue";

let messagesList = ref([
  { id: 1, message: "Hello", active: true },
  { id: 2, message: "Hi", active: true },
  { id: 3, message: "Good Morning", active: false },
]);

export default {
  data() {
    return {
      activeClass: "active-user",
      users: users,
      messagesList: messagesList,
    };
  },
  methods: {
    addNewMsg() {
      if (this.newMsgText) {
        this.messagesList.push({
          message: this.newMsgText,
          active: false,
        });
        this.newMsgText = "";
      }
    },
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
.users::-webkit-scrollbar {
  display: none;
}
.messages {
  background-color: white;
  flex: 9;
  padding: 2rem;
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
.message-wrapper {
  height: 75%;
  overflow-y: scroll;
  scrollbar-width: none;
}
.message-wrapper::-webkit-scrollbar {
  display: none;
}
.message-box {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  margin: 3rem 0;
}
.message-box.active-user {
  justify-content: flex-end;
}
.user-mg-img-box {
  position: relative;
  width: 5rem;
  height: 5rem;
  overflow: hidden;
  border-radius: 50%;
  margin-right: 1rem;
  margin-left: 1rem;
}
.user-mg-img-box.active-user {
  order: 3;
}
.user-mg-img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.message {
  width: 50%;
  background-color: skyblue;
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  font-size: 1.3rem;
  border-radius: 1rem 2rem 2rem 0;
}
.message.active-user {
  border-radius: 2rem 1rem 0 2rem;
  background-color: #d3d3d3;
  order: 2;
}
.time {
  color: #777;
  margin-left: 1rem;
}
.time.active-user {
  order: 1;
  margin-right: 1rem;
}
.message-sendbox {
  width: 100%;
  display: flex;
  padding: 1rem 3rem;
  border-top: 1px solid #ccc;
  margin-top: 3rem;
}
.message-sendbox input {
  flex: 10;
  height: 4rem;
  padding: 0.5rem;
  outline: none;
  border: none;
}
.send {
  flex: 2;
  outline: none;
  border: none;
  background-color: black;
  color: white;
}
</style>
