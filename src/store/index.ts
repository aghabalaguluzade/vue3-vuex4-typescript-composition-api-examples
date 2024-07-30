import { createStore, Store, StoreOptions } from "vuex";
import type { RootState } from "./types";
import { users } from './modules/users/state';
import { todos } from './modules/todos/state';
import { products } from "./modules/products/state";
import { cart } from './modules/cart/state';


const storeOptions: StoreOptions<RootState> = {
    modules: {
        users,
        todos,
        products,
        cart
    }
}

const store: Store<RootState> = createStore(storeOptions);

export default store;