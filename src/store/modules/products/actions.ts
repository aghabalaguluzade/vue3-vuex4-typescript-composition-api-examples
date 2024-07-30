import type { ActionTree, ActionContext } from "vuex/types/index.js";
import { ProductMutationsEnum, type Mutations } from "./mutations";
import type { ProductState, ProductType } from "./types";
import shop from '@/api/shop';
import type { RootState } from "@/store/types";

export enum ActionsProductEnum {
    FetchProducts = 'FETCH_PRODUCTS',
    DecrementProductInventory = 'DECREMENT_PRODUCT_INVENTORY',
}

type ActionAugments = {
    commit<K extends keyof Mutations>(
        key: K,
        payload: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>
} & Omit<ActionContext<ProductState, any>, 'commit'>

export type Actions = {
    [ActionsProductEnum.FetchProducts](context: ActionAugments): void
    [ActionsProductEnum.DecrementProductInventory](context: ActionAugments, product: ProductType): void
}

export const actions: ActionTree<ProductState, RootState> & Actions = {
    async [ActionsProductEnum.FetchProducts]({ state, commit }) {
        state.loading = true;
        const fetchedProduct = await shop.getProducts();
        commit(ProductMutationsEnum.SetProducts, fetchedProduct);
        state.loading = false;
    },
    async [ActionsProductEnum.DecrementProductInventory]({ commit }, product) {
        commit(ProductMutationsEnum.DecrementProductInventory, product);
    }
}