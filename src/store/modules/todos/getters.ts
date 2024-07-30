import { GetterTree } from "vuex";
import type { TodoState } from "./types";

export type Getters = {
    completedCount(state: TodoState): number
    totalCount(state: TodoState): number
}

export const getters: GetterTree<TodoState, any> & Getters = {
    completedCount: (state: TodoState) => state.todos.filter(todo => todo.completed).length,
    totalCount: (state: TodoState) => state.todos.length
}