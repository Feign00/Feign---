<template>
    <div class="featured-project-details">
        <h1>{{ projectTitle }}</h1>
        <img :src="projectImage" alt="项目图片" class="project-image">
        <p>{{ projectDescription }}</p>
        <hr>
        <p>{{ projectDetails }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            projects: [
                {
                    id: 1,
                    title: '项目1',
                    image: require('@/assets/images/Feign.png'),
                    description: '这是项目1的描述',
                    details: '项目1的详细信息'
                },
                {
                    id: 2,
                    title: '项目2',
                    image: require('@/assets/images/Feign.png'),
                    description: '这是项目2的描述',
                    details: '项目2的详细信息'
                },
                {
                    id: 3,
                    title: '项目3',
                    image: require('@/assets/images/Feign.png'),
                    description: '这是项目3的描述',
                    details: '项目3的详细信息'
                }
            ],
            projectTitle: '',
            projectImage: '',
            projectDescription: '',
            projectDetails: ''
        };
    },
    created() {
        const projectId = this.$route.params.id;
        const project = this.projects.find(p => p.id === parseInt(projectId));
        if (project) {
            this.projectTitle = project.title;
            this.projectImage = project.image;
            this.projectDescription = project.description;
            this.projectDetails = project.details;
        }
    }
};
</script>