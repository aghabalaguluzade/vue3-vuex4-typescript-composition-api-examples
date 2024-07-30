import { ActionTree, ActionContext } from "vuex";
import { TodoMutationsEnum, type Mutations } from "./mutations";
import type { TodoState, TodoType } from "./types";

export enum ActionsEnum {
  GetTodoItems = 'GET_ITEMS'
}

type ActionAugments = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<TodoState, any>, 'commit'>

export type Actions = {
  [ActionsEnum.GetTodoItems](context: ActionAugments): void;
}

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const actions: ActionTree<TodoState, any> & Actions = {
  async [ActionsEnum.GetTodoItems]({ commit }) {
    commit(TodoMutationsEnum.SetLoading, true);
    await sleep(1000);
    commit(TodoMutationsEnum.SetLoading, false);
    commit(TodoMutationsEnum.SetItems, [
      {
        id: 1,
        text: 'Create awesome Vue 3 with Vuex 4 video!',
        completed: false
      }
    ]);
  },
}