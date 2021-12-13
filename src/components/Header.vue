<template>
  <div class="header">
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">SoChat</a>
      <div class="search">
        <div class="icon"></div>
        <div class="input"></div>
      </div>
    </nav>
  </div>
</template>

<script>
const icon = document.querySelector('.icon');
const search = document.querySelector('.search');
export default {};
</script>

<style>
.header 
{
  width: 100%;
  height: 3.5rem;
  background-color: white;
  display: flex;
  justify-content:flex-start;
  align-items:center;
}
.navbar
{
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 3.5rem;
}
.navbar-brand
{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 35px;
  font-weight: bold;
  padding: 20px ;
  padding-right: 30px;
  text-decoration: none;
  color: #000000;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.search 
{
  position: relative;
  width: 360px;
  height: 35px;
  background: gainsboro;
  border-radius: 60px ;
  transition: 0.5s;
  box-shadow: 0 0 0 1px whitesmoke;
}
.search .icon
{
  position: absolute;
  top: 0;
  left: 0;
  width: 360px;
  height: 35px;
  background-color: white;
  border-radius: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  z-index: 1000;
  cursor: pointer;
}
.search .icon::before
{
  left: 10px;
  content: '';
  position: absolute;
  width: 10px;
  height: 10px;
  border: 1px solid gray;
  border-radius: 50%;
}
.search .icon::after
{
  left: 15px;
  content: '';
  position: absolute;
  width: 1px;
  height: 5px;
  background: gray;
  transform: translate(6px,6px) rotate(315deg);
}
</style>
