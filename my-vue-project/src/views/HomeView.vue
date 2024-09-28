<!-- src/views/HomeView.vue -->
<template>
    <div class="home">
      <h1>Home</h1>
      <p>Usuario: {{ userStore.user?.user }}</p>
      <p>Contraseña: {{ userStore.user?.password }}</p>
      <p>Recordarme: {{ userStore.user?.remember ? 'Sí' : 'No' }}</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useUserStore } from '../store';
  
  const userStore = useUserStore();
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Saira:wght@300;400;500;600;700&display=swap');
  
  .home {
    padding: 20px;
  }
  .home h1 {
    font-size: 2em;
  }
  .home p {
    font-size: 1.2em;
  }
  </style>