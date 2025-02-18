import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import ProjectDetail from '../views/ProjectDetail.vue'; // 修改路径为正斜杠

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/project/:id',
            name: 'project-detail',
            component: ProjectDetail
        }
    ]
});