import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

// 全局错误处理
app.config.errorHandler = (err, vm, info) => {
    console.error(`Error: ${err.toString()}\nInfo: ${info}`);
};

app.use(router);
app.mount('#app');