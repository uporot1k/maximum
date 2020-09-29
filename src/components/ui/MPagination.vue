<template>
  <div class="m-pagination">
    <m-btn v-for="(_, index) in tokens" :key="index" class="mx-1" v-text="index + 1" @click="onClick(index)" :disabled="value - 1 == index" />
  </div>
</template>
<script>
import MBtn from '@/components/ui/MBtn.vue';

export default {
  components: {
    MBtn,
  },
  props: {
    value: {
      type: Number,
      default: () => 1,
      required: true,
    },
    totalCount: {
      type: Number,
      default: () => 1,
      required: true,
    },
    size: {
      type: Number,
      default: () => 1,
      required: true,
    },
  },
  computed: {
    tokens() {
      return Math.ceil(this.totalCount / this.size);
    },
  },
  methods: {
    onClick(idx) {
      this.$emit('input', idx + 1);
    },
  },
};
</script>
<style lang="scss">
.m-pagination {
  @apply flex;
}
</style>
