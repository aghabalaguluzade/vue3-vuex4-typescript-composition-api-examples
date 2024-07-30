	import { MutationTree } from "vuex";
import type { TodoType, TodoState } from "./types";

export enum TodoMutationsEnum {
    CreateItem = 'CREATE_ITEM',
    SetItems = 'SET_ITEMS',
    CompleteItem = 'COMPLETE_ITEM',
    SetLoading = 'SET_LOADING',
    DeleteItem = 'DELETE_ITEM',
}

export type Mutations = {
    [TodoMutationsEnum.CreateItem](state: TodoState, item: TodoType): void
    [TodoMutationsEnum.SetItems](state: TodoState, todos: TodoType[]): void
    [TodoMutationsEnum.CompleteItem](state: TodoState, todos: Partial<TodoType> & { id : number }): void
    [TodoMutationsEnum.SetLoading](state: TodoState, loading: boolean): void
    [TodoMutationsEnum.DeleteItem](state: TodoState, todo: Partial<TodoType> & { id : number }): void
}

export const mutations: MutationTree<TodoState> & Mutations = {
    [TodoMutationsEnum.CreateItem](state: TodoState, todo: TodoType) {
        state.todos.unshift(todo);
    },
    [TodoMutationsEnum.SetItems](state: TodoState, todos: TodoType[]) {
        state.todos = todos;
    },
    [TodoMutationsEnum.CompleteItem](state: TodoState, newTodo: TodoType) {
        const todo = state.todos.findIndex(todo => todo.id === newTodo.id);
        if(todo === -1) return;
        state.todos[todo] = { ...state.todos[todo], ...newTodo };
    },
    [TodoMutationsEnum.SetLoading](state: TodoState, item: boolean) {
        state.loading = item;
    },
    [TodoMutationsEnum.DeleteItem](state: TodoState, todo: TodoType) {
        state.todos = state.todos.filter(item => item.id !== todo.id);
    }
} 
