import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './views/Home.vue';
import ProjectDetail from './views/ProjectDetail.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/project/:id', component: ProjectDetail }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;