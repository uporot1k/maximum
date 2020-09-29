<template>
  <div class="app-sidebar-wrapper">
    <transition name="app-sidebar">
      <div
        class="app-sidebar"
        :class="{ 'app-sidebar_opened': open }"
        v-if="open"
        v-click-outside="toggleSidebar"
      >
        <ul class="text-left">
          <li>
            <router-link :to="{ name: 'Home' }" class="text-2xl">Главная</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'LessonsList' }" class="text-2xl">Расписание</router-link>
          </li>
        </ul>
      </div>

    </transition>
  </div>
</template>
<script>
import ClickOutside from 'vue-click-outside';

export default {
  name: 'AppSidebar',
  inject: ['toggleSidebar'],
  props: {
    open: {
      type: Boolean,
      default: () => false,
      required: true,
    },
  },
  directives: {
    ClickOutside,
  },
};
</script>
<style lang="scss">
.app-sidebar {
  @apply fixed bottom-0 left-0 w-full py-6 px-4 z-50;
  height: calc(100vh - 80px);
  max-width: 300px;
  background: papayawhip;
  transition: all .5s;
}
.app-sidebar-enter-active, .app-sidebar-leave-active {
transform: translateX(0%);
}
.app-sidebar-enter, .app-sidebar-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  transform: translateX(-100%);
}
</style>
