<template>
  <div>
    <portal to="title" v-if="!!courseInfo && !! lessonInfo">
      <h1 v-text="`Курс: ${courseInfo.name} - Урок: ${lessonInfo.title}`" />
    </portal>
    <div class="py-8">
      Какая то инфа
    </div>
    <div class="flex justify-between w-1/4 mx-auto">
      <router-link :to="{ name: 'LessonDetailTests' }" class="mr-4">Тесты</router-link>
      <router-link :to="{ name: 'LessonDetailStat' }">Статистика</router-link>

    </div>
    <router-view class="mt-4"></router-view>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      lessonInfo: null,
      courseInfo: null,
    };
  },
  computed: {
    ...mapGetters('Lessons', ['getLessonInfoById']),
    ...mapGetters('Courses', ['getCourseInfoById']),
  },
  methods: {
    ...mapActions('Lessons', ['fetchLessonsList']),
  },
  async created() {
    await this.fetchLessonsList();

    this.lessonInfo = this.getLessonInfoById(this.$route.params.id);
    this.courseInfo = this.getCourseInfoById(this.lessonInfo.courseId);
  },
};
</script>
