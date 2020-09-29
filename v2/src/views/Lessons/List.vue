<template>
  <div class="page">
    <table class="m-auto table">
      <thead>
        <tr>
          <th>Название</th>
          <th>Начало</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="lesson in lessonsList" :key="lesson.id" @click="onRowClick(lesson.id)">
          <td v-text="lesson.title" />
          <td v-text="getTime(lesson.startedAt)" />
        </tr>
      </tbody>
    </table>
    <m-pagination v-model="pageNumber" :totalCount="filteredLessons.length" :size="pageSize" />
  </div>
</template>
<script>
import MPagination from '@/components/ui/MPagination.vue';

import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  components: {
    MPagination,
  },
  data() {
    return {
      pageSize: 5,
      pageNumber: 1,
    };
  },
  computed: {
    ...mapState('courses', ['pickedCourse']),
    ...mapGetters('Lessons', ['filteredLessons']),
    lessonsList() {
      return this.filteredLessons?.slice((this.pageNumber - 1) * (this.pageSize - 1), this.pageNumber * this.pageSize);
    },
  },
  methods: {
    ...mapActions('Lessons', ['fetchLessonsList']),
    onRowClick(id) {
      this.$router.push({ name: 'LessonDetail', params: { id } });
    },
    getTime(time) {
      return new Date(+time).toUTCString();
    },
  },
  watch: {
    $route() {
      this.pageNumber = 1;
    },
  },
  async created() {
    const fns = [
      this.fetchLessonsList(),
    ];

    await Promise.all(fns);
  },
};
</script>
<style lang="scss">
  .table {
    th, td {
      @apply p-3;
    }
    tr {
      @apply cursor-pointer;

      &:hover {
        @apply bg-green-200 transition-colors duration-300;
      }
    }
  }
</style>
