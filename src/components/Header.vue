<template>
  <div class="header">
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">SoChat</a>
      <div class="search">
        <div class="icon"></div>
        <div class="input">
          <input type="text" placeholder="Search" id="mysearch" />
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
// const icon = document.querySelector(".icon");
// const search = document.querySelector(".search");
// icon.onclick = function () {
//   search.classList.toggle("active");
// };
export default {};
</script>

<style>
.header {
  width: 100%;
  height: 5rem;
  background-color: white;
  color: black;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.navbar-brand {
  font-size: 3.5rem;
  font-weight: bold;
  padding: 2rem;
  justify-content: space-around;
  display: flex;
  text-decoration: none;
  color: #000000;
  flex-direction: row;
  flex: 1;
}
.search {
  flex: 2;
  position: relative;
}
</style>
