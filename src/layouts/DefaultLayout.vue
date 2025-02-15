<template>
  <div>
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';

export default {
  name: 'DefaultLayout',
  components: {
    Navbar
  }
};
</script>

<style scoped>
/* 样式内容 */
</style>