import { GetterTree } from "vuex";
import type { UserState, UserType } from "./types";

export type Getters = {
    getUserInfo(state: UserState): string;
    getUsername(state: UserState): string;
}

export const getters: GetterTree<UserState> & Getters = {
    getUserInfo(state: UserState): UserState {
        return state;
    },
    getUsername(state: UserType) {
        return state.username;
    }
}