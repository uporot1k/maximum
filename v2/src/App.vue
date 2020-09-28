<template>
  <div id="app">
    <app-header />
    <app-sidebar :value="isSidebarOpen" />
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
      toggleSidebar() {
        this.isSidebarOpen = !this.isSidebarOpen;
      },
    };
  },
  data() {
    return {
      isSidebarOpen: false,
    };
  },
  methods: {
    ...mapActions('Courses', ['fetchCoursesList']),
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
