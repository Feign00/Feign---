const { createApp } = Vue;
const { createRouter, createWebHashHistory } = VueRouter;

const Home = {
    template: `
        <section class="featured-project" id="featuredProject" @click="goToProject">
            <!-- 这里放主项目内容 -->
        </section>
        <div class="projects-carousel">
            <div class="carousel-track">
                <div class="project-item" @click="goToProject(1)">项目1</div>
                <div class="project-item" @click="goToProject(2)">项目2</div>
                <div class="project-item" @click="goToProject(3)">项目3</div>
                <!-- 后续可继续添加 -->
            </div>
        </div>
    `,
    methods: {
        goToProject(projectId) {
            this.$router.push({ path: `/project/${projectId}` });
        }
    }
};

const ProjectDetail = {
    template: `
        <div class="featured-project-details">
            <h1>主项目标题</h1>
            <img src="imgs/Feign.png" alt="项目图片" class="project-image">
            <p>这里是 Feign星际门的主项目内容，详细介绍项目的功能、特点和使用方法。</p>
            <hr>
            <p>通过nginx+uwsgi+django部署。</p>
            <p>后续会更新完整步骤。</p>
        </section>
        </div>
    `
};

const routes = [
    { path: '/', component: Home },
    { path: '/project/:id', component: ProjectDetail }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

const app = createApp({
    methods: {
        goHome() {
            this.$router.push('/');
        }
    }
});

app.use(router);
app.mount('#app');