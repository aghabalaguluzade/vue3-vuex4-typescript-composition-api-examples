<script setup lang="ts">
interface User {
  name: string;
  email: string;
  phone: string;
}

defineProps<{
  users: User[];
  loading: boolean;
}>();

</script>

<template>
    <div>
        <h2 class="mb-2">User Information</h2>
        <div v-if="loading">Loading...</div>
        <div v-else>
          <p v-for="(user, index) in users" :key="index">
            <strong>Name:</strong> {{ user.name }}<br>
            <strong>Email:</strong> {{ user.email }}<br>
            <strong>Phone:</strong> {{ user.phone }}
            <hr>
          </p>
        </div>
      </div>
</template>