import { MutationTree } from "vuex";
import type { UserState, UserType } from "./types";

export enum UserMutationsEnum {
    SET_USERS = "SET_USERS"
}

export type Mutations = {
    [UserMutationsEnum.SET_USERS](state: UserState, users: UserType[]): void
}

export const mutations: MutationTree<UserState> & Mutations = {
    [UserMutationsEnum.SET_USERS](state: UserState, users: UserType[]) {
        state.users = users;
    },
}