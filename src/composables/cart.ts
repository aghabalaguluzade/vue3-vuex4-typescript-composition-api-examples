import { computed } from 'vue';
import { useStore } from 'vuex';
import { ActionsCartEnum } from '@/store/modules/cart/actions';

export function useCart() {
    const store = useStore();

    const cartProducts = computed(() => store.state.cart.cartProducts);
    const total = computed(() => store.getters.cartTotal);
    const checkoutStatusMessage = computed(() => store.state.cart.checkoutStatus);

    const checkout = () => {
        store.dispatch(ActionsCartEnum.Checkout);
    };

    return {
        cartProducts,
        total,
        checkoutStatusMessage,
        checkout
    };
}
