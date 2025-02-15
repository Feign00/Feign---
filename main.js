import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

// 全局错误处理
Vue.config.errorHandler = function (err, vm, info) {
    console.error(`Error: ${err.toString()}\nInfo: ${info}`);
};

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');