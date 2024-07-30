import { Module } from 'vuex';
import type { UserState } from "./types";
import { getters } from "./getters";
import { mutations } from "./mutations";
import { actions } from "./actions";
import type { RootState } from "@/store/types";

const initialState: UserState = {
    loading: false,
    users: [],
}

export const users: Module<UserState, RootState> = {
    state : initialState,
    getters,
    mutations,
    actions
  };