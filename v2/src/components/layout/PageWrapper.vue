<template>
  <div class="page-wrapper">
    <portal-target name="title">
      <h1>{{ $route.meta.title }}</h1>
    </portal-target>
    <div class="page-wrapper__view">
      <slot />
    </div>
  </div>
</template>
