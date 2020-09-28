<template>
  <div
    class="app-sidebar"
    :class="{ 'app-sidebar_opened': value }"
    v-click-outside="toggleSidebar"
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
  directives: {
    ClickOutside,
  },
};
</script>
