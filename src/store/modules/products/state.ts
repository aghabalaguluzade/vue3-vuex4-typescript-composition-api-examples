import { Module } from 'vuex';
import { getters } from "./getters";
import { mutations } from "./mutations";
import { actions } from "./actions";
import type { RootState } from '@/store/types';
import type { ProductState } from './types';

const initialState: ProductState = {
    loading: false,
    products: []
}

export const products: Module<ProductState, RootState> = {
    state : initialState,
    getters,
    mutations,
    actions
};