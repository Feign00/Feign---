<template>
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
</template>

<script>
export default {
    methods: {
        goToProject(projectId) {
            this.$router.push({ path: `/project/${projectId}` });
        }
    }
};
</script>