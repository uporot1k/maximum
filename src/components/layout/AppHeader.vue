<template>
  <div class="app-header">
    <div class="flex ml-auto">
      <m-btn @click.stop="toggleSidebar" class="mr-4">Меню</m-btn>
      <select
        v-model="pickedCourseInner"
        class="px-3"
      >
        <option
          v-for="course in coursesList"
          :key="course.id"
          :value="course.id"
          v-text="course.name"
        />
      </select>

    </div>
  </div>
</template>
<script>
import MBtn from '@/components/ui/MBtn.vue';

import { mapState, mapActions } from 'vuex';

export default {
  components: {
    MBtn,
  },
  inject: ['toggleSidebar'],
  data() {
    return {
      pickedCourseInner: 0,
    };
  },
  computed: {
    ...mapState('Courses', ({
      coursesList: (state) => state.items,
      pickedCourse: (state) => state.pickedCourse,
    })),
  },
  watch: {
    pickedCourse(v) {
      this.pickedCourseInner = v;
    },
    pickedCourseInner(id) {
      this.pickCourse(id);
    },
  },
  methods: {
    ...mapActions('Courses', ['pickCourse']),
  },
};
</script>
<style lang="scss">
.app-header {
  @apply flex items-center bg-indigo-200 px-4 py-3;

  height: 80px;
}
</style>
