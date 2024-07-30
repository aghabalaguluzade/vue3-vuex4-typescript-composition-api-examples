import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
import '@/assets/main.css';
import Toast, { PluginOptions } from "vue-toastification";
import "vue-toastification/dist/index.css"; 

const app = createApp(App)

const options: PluginOptions = {
};

app.use(store);
app.use(router);
app.use(Toast, options);
app.config.globalProperties.$filters = {
    currency(value: any) {
        if (typeof value !== 'number' || isNaN(value)) {
            return '';
        }
        return `$${value.toFixed(2)}`;
    }
}
app.mount('#app');