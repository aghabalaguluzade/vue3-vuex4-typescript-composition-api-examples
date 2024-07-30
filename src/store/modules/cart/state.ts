import { Module } from 'vuex';
import { getters } from "./getters";
import { mutations } from "./mutations";
import { actions } from "./actions";
import type { RootState } from '@/store/types';
import type { CartState } from './types';

const initialState: CartState = {
    cartProducts: [],
    checkoutStatus: '',
    loading: false,
}

export const cart: Module<CartState, RootState> = {
    state: initialState,
    getters,
    mutations,
    actions,
};
