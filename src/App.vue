<template>
  <header>
    <div id="nav" class="shadow p-2 mb-5 bg-white rounded">
      <a class="navbar-brand" href="/">
        <img src="./assets/logo.png" width="35" height="35" class="d-inline-block" alt="">
        
      </a>
      <router-link to="/">RTP</router-link> /
      <router-link to="/Apis">Apis</router-link> /
      <router-link to="/Demos">Demos</router-link> /

    </div>
  </header>
  <router-view/>
</template>

<style scoped>
.shadow{
  margin-left: 5px;
}
a{
  color: rgb(0, 143, 83);
  font-size: 20px;
}
</style>
