<template>
  <div id="app">
    <app-header />
    <app-sidebar :open="isSidebarOpen" />
    <page-wrapper>
      <router-view />
    </page-wrapper>
  </div>
</template>
<script>
import AppHeader from '@/components/layout/AppHeader.vue';
import AppSidebar from '@/components/layout/AppSidebar.vue';
import PageWrapper from '@/components/layout/PageWrapper.vue';

import { mapActions } from 'vuex';

export default {
  components: {
    AppHeader,
    AppSidebar,
    PageWrapper,
  },
  provide() {
    return {
      toggleSidebar: () => {
        this.toggleSidebarInner();
      },
    };
  },
  data() {
    return {
      isSidebarOpen: false,
    };
  },
  watch: {
    $route() {
      this.isSidebarOpen = false;
    },
  },
  methods: {
    ...mapActions('Courses', ['fetchCoursesList']),
    toggleSidebarInner() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
  },
  async created() {
    const fns = [
      this.fetchCoursesList(),
    ];

    await Promise.all(fns);
  },
};
</script>
<style lang="scss">
body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.page {
  @apply p-8;
}
</style>
