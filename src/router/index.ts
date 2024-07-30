import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/Home.vue'),
        alias: '/home',
        meta : {
            title: 'Home',
        }
    },
    {
        path: '/protected',
        name: 'protected',
        components: {
            default: () => import('@/views/Protected.vue')
        },
        meta: {
            requiresAuth: true,
            title: 'Protected',
        }
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/Login.vue'),
        meta : {
            title: 'Login',
        }
    },
    {
        path: '/shopping-cart',
        name: 'ShoppingCart',
        component: () => import('@/views/ShoppingCart.vue'),
        meta : {
            title: 'Shopping Cart',
        }
    },
    {
        path: '/todo-app',
        name: 'TodoApp',
        component: () => import('@/views/TodoApp.vue'),
        meta : {
            requiresAuth : true,
            title : 'Todo App'
        }
    },
    {
        path: '/user',
        name: 'User',
        component: () => import('@/views/User.vue'),
        meta : {
            requiresAuth : true,
            title : 'User'
        }
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'notfound',
        component: () => import('@/views/NotFound.vue'),
        meta : {
            title : 'Not Found'
        }
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    linkActiveClass: "active",
    linkExactActiveClass: "active",
    scrollBehavior(to, from, savedPosition) {
        if (to.params.id !== from.params.id) {
            return new Promise((resolve) => {
                setTimeout(() => resolve(savedPosition || { top: 0 }), 300)
            })
        }
    }
});

router.beforeEach((to, from) => {
    if (to.meta.requiresAuth && !window.user) {
        return { name: 'login', query: { redirect: to.fullPath } }
    }
});

export default router;