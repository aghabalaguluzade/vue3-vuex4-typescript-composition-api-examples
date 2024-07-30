import type { ActionTree, ActionContext } from "vuex/types/index.js";
import type { CartState, CartProductType } from "./types";
import { CartMutationsEnum, type Mutations } from "./mutations";
import type { RootState } from "@/store/types";
import shop from '@/api/shop';
import { ProductMutationsEnum } from "../products/mutations";
import { useToast } from 'vue-toastification';
const toast = useToast();

export enum ActionsCartEnum {
    AddProductToCart = 'ADD_PRODUCT_TO_CART',
    Checkout = 'CHECKOUT'
}

type ActionAugments = {
    commit<K extends keyof Mutations>(
        key: K,
        payload: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>
} & Omit<ActionContext<CartState, RootState>, 'commit'>

export type Actions = {
    [ActionsCartEnum.AddProductToCart](context: ActionAugments, products: CartProductType): void
    [ActionsCartEnum.Checkout](context: ActionAugments): void
}

export const actions: ActionTree<CartState, RootState> & Actions = {
    async [ActionsCartEnum.AddProductToCart]({ state, getters, commit }, product) {
        if (!getters.productIsInStock(product)) {
            return;
        }

        const cartItem = state.cartProducts.find(item => item.id === product.id);    
                 
        if(!cartItem) {
            commit(CartMutationsEnum.PushProductToCart, product);
            toast.success('Add to Shopping Cart.');
        }else {
            commit(CartMutationsEnum.IncrementItemQuantity, cartItem);
        }
        commit(ProductMutationsEnum.DecrementProductInventory, product);
    },
    async [ActionsCartEnum.Checkout]({ state, commit }) {        
        try {
            await shop.buyProducts(
                state.cartProducts,
                () => {
                    commit(CartMutationsEnum.EmptyCart);
                    commit(CartMutationsEnum.SetCheckoutStatus, 'success');
                    toast.success('Purchase completed successfully! Thank you for shopping with us.');
                },
                () => {
                    commit(CartMutationsEnum.SetCheckoutStatus, 'fail');
                    toast.error('Oops! Something went wrong during checkout. Please try again later.');
                }
            );
        } catch (error) {
            console.error('Error during checkout:', error);
            commit(CartMutationsEnum.SetCheckoutStatus, 'fail');
            toast.error('Oops! Something went wrong. Please try again later.');
        }
    }
}