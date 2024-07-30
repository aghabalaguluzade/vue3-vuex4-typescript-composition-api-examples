import { GetterTree } from "vuex";
import type { CartState, CartProductType } from "./types";
import type { RootState } from "@/store/types";

export type Getters = {
    cartProducts(state: CartState, getters: any, rootState: RootState, rootGetters: any): CartProductType[]
}

export const getters: GetterTree<CartState, RootState> & Getters = {
    cartProducts(state: CartState, getters, rootState, rootGetters) {
        return state.cartProducts.map(cartItem => {
            const product = rootState.products.products.find(product => product.id === cartItem.id);
            if (product) {
                return {
                    ...cartItem,
                    title: product.title,
                    price: product.price
                };
            } else {
                return cartItem;
            }
        });
    },
    cartTotal(state: CartState, getters) {
        return getters.cartProducts.reduce((total, product) => total + product.price * product.quantity,0)
    }
}
