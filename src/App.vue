<template>
  <header>
    <div id="nav" class="p-2 mb-5 bg-white shadow">
      <a class="navbar-brand" href="/">
        <img src="./assets/logo.png" width="45" height="45" class="d-inline-block" alt="">
        
      </a>
      <router-link class="li" to="/">RTP</router-link> 
      <router-link class="li" to="/Apis">Apis</router-link>  
      <router-link class="li" to="/Demos">Demos</router-link> 
    </div>
  </header>
  <router-view/>
</template>

<style scoped>

.shadow{
  box-shadow: 0 8px 6px -6px black;
  
}
.li{
  background-color: rgb(255, 255, 255);
  border-radius: 0px;
  border: 2px solid black;
  margin-right: 5px;
  padding: 5px 15px;
  color: rgb(0, 0, 0);
  font-size: 16px;
}

</style>
