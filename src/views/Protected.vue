<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const username = ref<string | null>(window.user);
const router = useRouter();

const logout = () => {
    window.user = null
    router.push({ name : 'home', query : { logout : null } });
}

</script>

<template>
    <h1>Greetings, {{ username }}</h1>
    <button @click="logout" class="btn" style="height:35px;  margin: 0 5px 0 5px;">Logout</button>
    <router-link :to="{ name : 'home' }">
        <button class="btn">Home</button>
    </router-link>
</template>

<style scoped>
.btn {
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
}

.btn:hover {
    background-color: #0056b3;
}
</style>