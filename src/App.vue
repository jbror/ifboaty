<template>
  <div class="container">
    <div class="content">
      <h1 style="font-size: 3em;">IFBoaty</h1>
      <p>Gå till din båt för att börja. Har du ingen båt så skapar du den här!</p>
<Boat style="display:flexbox; margin-top: 15px;"></Boat>
    </div>
  </div>
  
</template>

<script setup lang="ts">
import Boat from './components/Boat.vue';




</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  background: #1a1a2e;
  margin: 0;
  padding: 0;
}

.content {
  text-align: center;
  color: #fff;
  margin-top: 5%;
}


p {
  font-size: 1.1rem;
  margin: 0;
}
</style>
