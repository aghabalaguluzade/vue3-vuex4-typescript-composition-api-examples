<script setup>
import { useUsers } from "@/composables/users";
import UserList from "@/components/UserList.vue";

const { users, loading } = useUsers();
</script>

<template>
    <UserList :users="users" :loading="loading" />
</template>