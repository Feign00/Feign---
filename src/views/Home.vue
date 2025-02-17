<template>
  <div class="home">
    <!-- 封面部分 -->
    <div class="cover">
      <img :src="require('@/assets/images/Feign.png')"
           alt="Feign星际门项目封面图片"
           class="project-image"/>
      <h1>欢迎来到 Feign星际门</h1>
    </div>

    <!-- 主项目内容部分 -->
    <div class="content">
      <h2>项目介绍</h2>
      <p>这里是 Feign星际门的主项目内容，详细介绍项目的功能、特点和使用方法。</p>
      <section>
        <h3>功能一：星际旅行模拟</h3>
        <p>通过虚拟现实技术，模拟真实的星际旅行体验。</p>
      </section>
      <section>
        <h3>功能二：星际地图导航</h3>
        <p>提供详细的星际地图，帮助用户规划旅行路线。</p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
.home {
  text-align: center;
}

.cover img {
  max-width: 100%;
  height: auto;
}

.content {
  margin-top: 20px;
  text-align: left;
  padding: 0 20px;
}

section {
  margin-bottom: 20px;
}
</style>