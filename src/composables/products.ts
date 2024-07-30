import { computed } from 'vue';
import { useStore } from 'vuex';
import { ActionsProductEnum } from '@/store/modules/products/actions';
import type { ProductType } from '@/store/modules/products/types';
import { ActionsCartEnum } from '@/store/modules/cart/actions';

export function useProducts() {
    const store = useStore();

    const products = computed<ProductType[]>(() => store.state.products.products);
    const loading = computed<boolean>(() => store.state.products.loading);

    const fetchProducts = () => {
        store.dispatch(ActionsProductEnum.FetchProducts);
    };

    const productIsInStock = (product: ProductType) => {        
        return product.inventory > 0;
    };

    const addProductToCart = (product: ProductType) => {
        store.dispatch(ActionsCartEnum.AddProductToCart, product);
    };

    return {
        products,
        loading,
        fetchProducts,
        productIsInStock,
        addProductToCart
    };
}
