<template>
  <component
    :is="componentTag"
    class="m-btn"
    v-on="$listeners"
  >
    <slot />
  </component>
</template>
<script>
export default {
  props: {
    to: {
      type: [String, Object],
      default: () => null,
    },
  },
  computed: {
    componentTag() {
      return this.to ? 'a' : 'button';
    },
  },
};
</script>
<style lang="scss">
  .m-btn {
    @apply flex py-2 px-4 bg-purple-500 text-white rounded-sm;

    height: fit-content;
    width: fit-content;
    &:disabled {
      opacity: 0.7;
    }
  }
</style>
