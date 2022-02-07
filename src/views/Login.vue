<template>
  <div class="login-block">
    <h1>Login</h1>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="text" placeholder="Password" v-model="password" /></p>
    <p v-if="errorMessage">{{ errorMessage }}</p>
    <p><button @click="login">Login</button></p>
  </div>
  <div class="signup-btn">
    <button @click="router.push('/signup')">Sign Up</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { auth, db } from "../main";
import { signInWithEmailAndPassword } from "firebase/auth";
import { updateDoc, doc } from "firebase/firestore";
import { useRouter } from "vue-router";
const email = ref("");
const password = ref("");
const errorMessage = ref();
const router = useRouter();

const login = async () => {
  try {
    const data = await signInWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );
    await updateDoc(doc(db, "users", data.user.uid), {
      isOnline: true,
    });
    console.log("Successfully signed in");
    router.push("/");
  } catch (error) {
    console.log(error.code);
    console.log(email.value, password.value);
    switch (error.code) {
      case "auth/invalid-email":
        errorMessage.value = "Invalid email";
        break;
      case "auth/user-not-found":
        errorMessage.value = "No account with this email has been found";
        break;
      case "auth/invalid-password":
        errorMessage.value = "Incorrect password";
        break;
      default:
        errorMessage.value = "Email or passwordd was incorrect";
        break;
    }
  }
};
</script>

<style scoped>
.name {
  position: fixed;
  bottom: 50%;
  right: 80%;
  font-size: 52px;
}

body {
  background: url("http://i.imgur.com/Eor57Ae.jpg") no-repeat fixed center
    center;
  background-size: cover;
  font-family: Montserrat;
}

.logo {
  width: 213px;
  height: 36px;
  background: url("http://i.imgur.com/fd8Lcso.png") no-repeat;
  margin: 30px auto;
}

.login-block {
  width: 320px;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  border-top: 5px solid #ff656c;
  margin: 0 auto;
  position: fixed;
  bottom: 50%;
  left: 40%;
}
.signup-btn {
  cursor: pointer;
  width: 320px;
  position: fixed;
  height: 40px;
  background: #ffffff;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid #e15960;
  color: rgb(255, 52, 52);
  font-weight: bold;
  text-transform: uppercase;
  font-size: 14px;
  font-family: Montserrat;
  bottom: 45%;
  left: 40%;
  text-align: center;
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
