<template>
<div>
  <h1 class="header"> SoChat </h1>
</div>
<div class="login-block">
    <h1>Create An Account</h1>
    <p><input type="text" placeholder="First Name" v-model="firstname"/></p>
    <p><input type="text" placeholder="Last Name" v-model="lastname"/></p>
    <p><input type="text" placeholder="Email" v-model="email"/></p>
    <p><input type="text" placeholder="Password" v-model="password"/></p>
    <p><button @click="signup">Submit</button></p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc, Timestamp } from "firebase/firestore";
import { db, auth } from "../main";
import { useRouter } from "vue-router";
const firstname = ref("");
const lastname = ref("");
const email = ref("");
const password = ref("");
const router = useRouter();

const signup = () => {
  createUserWithEmailAndPassword(
    auth,
    email.value,
    password.value,
    firstname.value,
    lastname.value
  )
    .then((data) => {
      console.log("Registration successful");
      console.log(data.user.uid);
      setDoc(doc(db, "users", data.user.uid), {
        uid: data.user.uid,
        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value,
        isOnline: false,
        createdAt: Timestamp.fromDate(new Date()),
      });
      router.push("/");
    })
    .catch((error) => {
      console.log(error.code);
      alert(error.message);
    });
};
</script>

<style scoped>

.header {
  font-family: Tahoma;
  font-size: 40px;
  font-weight: bolder;
  margin-top: 30px;
  color: #ff656c;
}
.name {
  position: fixed;
  bottom: 50%;
  right: 80%;
  font-size: 52px;
}

body {
  background-size: cover;
  font-family: Montserrat;
}

.login-block {
  width: 320px;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  border-top: 5px solid #ff656c;
  margin: 0 auto;
  position: relative;
}

.login-block h1 {
  text-align: center;
  color: #000;
  font-size: 18px;
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 20px;
}

.login-block input {
  width: 100%;
  height: 42px;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  font-size: 14px;
  font-family: Montserrat;
  padding: 0 20px 0 50px;
  outline: none;
}

.login-block input#username {
  background: #fff url("http://i.imgur.com/u0XmBmv.png") 20px top no-repeat;
  background-size: 16px 80px;
}

.login-block input#username:focus {
  background: #fff url("http://i.imgur.com/u0XmBmv.png") 20px bottom no-repeat;
  background-size: 16px 80px;
}

.login-block input#password {
  background: #fff url("http://i.imgur.com/Qf83FTt.png") 20px top no-repeat;
  background-size: 16px 80px;
}

.login-block input#password:focus {
  background: #fff url("http://i.imgur.com/Qf83FTt.png") 20px bottom no-repeat;
  background-size: 16px 80px;
}

.login-block input:active,
.login-block input:focus {
  border: 1px solid #ff656c;
}

.login-block button {
  width: 100%;
  height: 40px;
  background: #ff656c;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid #e15960;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 14px;
  font-family: Montserrat;
  outline: none;
  cursor: pointer;
}

.login-block button:hover {
  background: #ff7b81;
}
</style>
