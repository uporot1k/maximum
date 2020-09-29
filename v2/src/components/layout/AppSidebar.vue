<template>
  <div class="app-sidebar-wrapper">
    <transition name="app-sidebar">
      <div
        class="app-sidebar"
        :class="{ 'app-sidebar_opened': value }"
        v-if="innerValue"

      >
        <ul>
          <li>
            <router-link :to="{ name: 'Home' }">Главная</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Schedule' }">Расписание</router-link>
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
    value: {
      type: Boolean,
      default: () => false,
      required: true,
    },
  },
  data() {
    return {
      innerValue: this.value,
    };
  },
  watch: {
    value(v) {
      this.innerValue = v;
    },
    innerValue(v) {
      this.$emit('input', v);
    },
  },
  directives: {
    ClickOutside,
  },
};
</script>
<style lang="scss">
.app-sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
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
