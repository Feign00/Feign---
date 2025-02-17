import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  { 
    path: '/', 
    component: () => import('@/views/Home.vue') // 使用动态导入以提高性能
  }
];

// 使用 history 模式以去除 URL 中的 # 符号
export default new VueRouter({
  mode: 'history', 
  routes,
  base: '/', // 确保 Vercel 支持 history 模式
});