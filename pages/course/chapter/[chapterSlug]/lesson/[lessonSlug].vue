<script setup lang="ts">
const course = useCourse();
const route = useRoute();
console.log(course);

const chapter = computed(() => {
  return course.chapters.find(
    (chapter) => chapter.slug === route.params.chapterSlug
  );
});

const lesson = computed(() => {
  return chapter.value?.lessons.find(
    (lesson) => lesson.slug === route.params.lessonSlug
  );
});
</script>

<template>
  <h2>Lesson</h2>
  <p>This is a lesson</p>
  <p>{{ chapter?.title }}</p>
  <p>{{ lesson?.title }}</p>
</template>

<style lang="scss" scoped></style>