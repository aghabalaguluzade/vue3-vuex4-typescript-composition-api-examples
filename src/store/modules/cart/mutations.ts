import { MutationTree } from "vuex";
import type { CartState, CartProductType } from "./types";

export enum CartMutationsEnum {
    PushProductToCart = 'PUSH_PRODUCT_TO_CART',
    IncrementItemQuantity = 'INCREMENT_ITEM_QUANTITY',
    EmptyCart = 'EMPTY_CART',
    SetCheckoutStatus = 'SET_CHECKOUT_STATUS'
}

export type Mutations = {
    [CartMutationsEnum.PushProductToCart](state: CartState, cart: CartProductType): void
    [CartMutationsEnum.IncrementItemQuantity](state: CartState, cart: CartProductType): void
    [CartMutationsEnum.EmptyCart](state: CartState): void
    [CartMutationsEnum.SetCheckoutStatus](state: CartState, checkoutStatus: string): void
}

export const mutations: MutationTree<CartState> & Mutations = {
    [CartMutationsEnum.PushProductToCart](state: CartState, cart: CartProductType) {    
        state.cartProducts.push({
            id : cart.id,
            title : cart.title,
            price : cart.price,
            quantity : 1
        });
    },
    [CartMutationsEnum.IncrementItemQuantity](state: CartState, cartItem: CartProductType) {
        cartItem.quantity++;
    },
    [CartMutationsEnum.EmptyCart](state: CartState) {
        state.cartProducts = [];
    },
    [CartMutationsEnum.SetCheckoutStatus](state: CartState, checkoutStatus: CartProductType) {
        state.checkoutStatus = checkoutStatus;
    }
}