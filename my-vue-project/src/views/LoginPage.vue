<!-- src/views/LoginPage.vue -->
<template>
    <LoginForm />
  </template>
  
  <script setup lang="ts">
  import LoginForm from '../components/LoginForm.vue';
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Saira:wght@300;400;500;600;700&display=swap');
  
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    background: url('../assets/background.jpg') no-repeat;
    background-size: cover;
    background-position: center;
    min-height: 100vh;
    max-height: 100vh;
    max-width: 100vw;
  }
  </style>