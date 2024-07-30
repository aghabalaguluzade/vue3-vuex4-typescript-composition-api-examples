<script setup lang="ts">

</script>

<template>
  <div id="nav">
    <router-link id="logo" to="/">Home</router-link>
    <router-link :to="{ name: 'TodoApp' }">Todo App</router-link>
    <router-link :to="{ name: 'ShoppingCart' }">Shopping Card</router-link>
    <router-link :to="{ name : 'User' }">User</router-link>
  </div>
  <router-view />
</template>

<style scoped lang="css">
#active {
  color: #2c3e50;
  border-bottom: 2px solid #2c3e50;
}

</style>
