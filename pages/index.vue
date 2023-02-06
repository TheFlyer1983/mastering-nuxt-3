<script setup lang="ts">
const firstLesson = useFirstLesson();
</script>

<template>
  <NuxtLink class="font-medium underline" :to="firstLesson.path">
    Go to first lesson
  </NuxtLink>
</template>

<style lang="scss" scoped></style>
