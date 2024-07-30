<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import TodoItem from "./TodoItem.vue";

const store = useStore();
const todos = computed(() => store.state.todos.todos);

</script>

<template>
  <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
</template>
