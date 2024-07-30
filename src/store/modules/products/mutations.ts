import { MutationTree } from "vuex";
import type { ProductState, ProductType } from "./types";
import type { RootState } from "@/store/types";

export enum ProductMutationsEnum {
    SetProducts = 'SET_PRODUCTS',
    DecrementProductInventory = 'DECREMENT_PRODUCT_INVENTORY',
}

export type Mutations = {
    [ProductMutationsEnum.SetProducts](state: ProductState, products: ProductType): void
    [ProductMutationsEnum.DecrementProductInventory](state: ProductState, cart: ProductType): void
}

export const mutations: MutationTree<ProductState, RootState> & Mutations = {
    [ProductMutationsEnum.SetProducts](state: ProductState, products: ProductType) {
        state.products = products;
    },
    [ProductMutationsEnum.DecrementProductInventory](state: ProductState, product: ProductType) {       
        product.inventory--;
    },
}