import { ActionTree, ActionContext } from "vuex";
import { UserMutationsEnum, type Mutations, } from './mutations'
import type { UserState, UserType } from "./types";

export enum ActionsEnum {
  LoadAPIResult = 'LOAD_API_RESULT'
}

// Broader Action (state, getters)
type ActionAugments = Omit<ActionContext<UserState, {}>, 'commit'> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
}

// All you need is commit (onyl commit)

// type ActionAugments = {
//   commit<K extends keyof Mutations>(
//     key: K,
//     payload: Parameters<Mutations[K]>[1]
//   ): ReturnType<Mutations[K]>
// }

export type Actions = {
  [ActionsEnum.LoadAPIResult](context: ActionAugments): Promise<UserType[]>
}

export const actions: ActionTree<UserState, {}> & Actions = {
  async [ActionsEnum.LoadAPIResult]({ commit }) {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      commit(UserMutationsEnum.SET_USERS, data);
      return data;
    }catch(error) {
      console.error('Error fetching API:', error);
      throw error;
    }
  },
};