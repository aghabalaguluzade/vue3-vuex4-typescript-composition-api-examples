import type { TodoState } from './modules/todos/types';
import type { UserState } from './modules/users/types';
import type { ProductState } from './modules/products/types';
import type { CartState } from '@/store/modules/cart/types';

export interface RootState {
    todos : TodoState;
    users: UserState;
    products : ProductState,
    cart: CartState;
}