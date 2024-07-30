import { Module } from 'vuex';
import type { TodoState } from './types';
import { getters } from "./getters";
import { mutations } from "./mutations";
import { actions } from "./actions";
import type { RootState } from '@/store/types';

const initialState: TodoState = {
  loading: false,
  todos: []
}

export const todos: Module<TodoState, RootState> = {
    state : initialState,
    getters,
    mutations,
    actions
};