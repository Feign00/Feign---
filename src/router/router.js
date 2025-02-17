import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import ProjectDetail from 'views/ProjectDetail.vue'; // 修改路径为正斜杠

Vue.use(Router);

export default new Router({
    mode: 'history',
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