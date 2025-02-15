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
            <img src="project-image.jpg" alt="项目图片" class="project-image">
            <p>这里是主项目的详细描述，可以包括以下内容：</p>
            <ul>
                <li>项目背景</li>
                <li>项目目标</li>
                <li>项目特点</li>
                <li>技术栈</li>
                <li>项目成果</li>
            </ul>
            <p>更多信息可以在这里补充。</p>
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