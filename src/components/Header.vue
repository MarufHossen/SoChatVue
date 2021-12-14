<template>
  <nav class="navbar navbar-light bg-light">
    <a class="navbar-brand" href="#">SoChat</a>
    <div class="profile-image">
      <img class="img" src="src\assets\ahmed.jpg" href="#" />
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
.navbar {
  width: 100%;
  max-height: 7rem;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 0 2px whitesmoke;
}
.navbar-brand {
  font-family: "Franklin Gothic Medium";
  font-size: 35px;
  font-weight: bold;
  padding: 20px;
  padding-right: 30px;
  text-decoration: none;
  color: #2f4f4f;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  display: flex;
  flex: 1;
}

.box {
  position: relative;
  padding-top: 70px;
  padding-left: 15rem;
  width: 50%;
  transform: translate(-33%, -33%);
  display: flex;
  flex: 1;
  justify-content: space-between;
}
.input {
  padding: 10px;
  width: 50%;
  height: 30px;
  background: none;
  border: 1px solid black;
  border-radius: 50px;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  font-size: 13px;
  color: black;
  outline: none;
  transition: 0.5s;

  justify-content: center;
}
.box:hover input {
  width: 300px;
  background: white;
  border-radius: 10px;
}

.profile-image {
  display: flex;
  justify-content: flex-end;
  padding-right: 30px;
  cursor: pointer;
  flex: 1;
}
.img {
  border-radius: 40px;
  width: 40px;
}
</style>
