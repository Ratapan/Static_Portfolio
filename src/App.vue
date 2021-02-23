<template>
  <header>
    <div id="nav" class="p-2 mb-5 bg-white sha">
      
        <img src="./assets/logo.png" width="45" height="45" class="d-inline-block im" alt="">
    
      <router-link class="li" to="/"> RTP</router-link> 
      <router-link class="li" to="/Apis">Apis</router-link>  
      <router-link class="li" to="/Demos">Demos</router-link>
    </div>
  </header>
  <router-view/>
</template>

<style scoped>
.d-inline-block{
  margin: 0;
  padding: 0;
}
.im{
  margin: 5px 5% 5px 5%;
  padding: 0px;
  height: 50px;
  width: 50px;
}
.sha{
  box-shadow: 0 5px 5px -5px rgb(99, 99, 99);
  
}
.li{
  background-color: rgb(255, 255, 255);
  border-radius: 0px;
  border: 2px solid black;
  margin: 0px 2% 0px 2%;
  padding: 6px 12px;
  color: rgb(0, 0, 0);
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
}
.sha a:hover{
  background-color:rgb(200, 255, 237);
}
</style>
