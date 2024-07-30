<script setup lang="ts">
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();
const username = ref<string>('');
const password = ref<string>('')

const login = () => {
    window.user = username.value;
    const redirectPath = route.query.redirect || '/protected';
    router.push(redirectPath);
}

</script>

<template>
    <div class="login">
        <form @submit.prevent="login" class="form">
            <h1>Login</h1>
            <label for="username">Username</label>
            <input v-model="username" type="text" name="username" class="input" />
            <label for="password">Password</label> 
            <input v-model="password" type="password" name="password" class="input" />
            <button class="btn">Login</button>
        </form>
    </div>
</template>