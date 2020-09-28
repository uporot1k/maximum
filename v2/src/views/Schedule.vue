<template>
  <div class="page">
    <portal to="title">
      <h1>{{ $route.meta.title + pickedCourse }}</h1>
    </portal>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState('courses', ['pickedCourse']),
  },
};
</script>
