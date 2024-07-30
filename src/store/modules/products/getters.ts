import { GetterTree } from "vuex";
import type { ProductState, ProductType } from "./types";
import type { RootState } from "@/store/types";
import { useToast } from 'vue-toastification';
const toast = useToast();

export type Getters = {
    availableProducts(state: ProductState): ProductType[]
    productIsInStock(state: ProductState): ProductType;
}

export const getters: GetterTree<ProductState, RootState> & Getters = {
    availableProducts(state: ProductState) {
        return state.products.filter(product => product.inventory > 0);
    },
    productIsInStock(state: ProductState) {
        const toast = useToast();
        return (product) => {
            if (product.inventory > 0) {
                return true;
            } else {
                toast.error('Out of stock.');
                return false;
            }
        };
    },
}