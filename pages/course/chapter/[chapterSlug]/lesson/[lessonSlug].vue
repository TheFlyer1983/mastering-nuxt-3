<script setup lang="ts">
const course = useCourse();
const route = useRoute();

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
  <div>
    <p class="mt-0 mb-1 font-bold uppercase text-slate-400">
      Lesson {{ chapter?.number }} - {{ lesson?.number }}
    </p>
    <h2 class="my-0">{{ lesson?.title }}</h2>
    <div> 
      <a
        v-if="lesson?.sourceUrl"
        class="text-md font-normal text-gray-500"
        :href="lesson.sourceUrl"
      >
        Download Source Code
      </a>
      <a
        v-if="lesson?.downloadUrl"
        class="text-md font-normal text-gray-500"
        :href="lesson.downloadUrl"
      >
        Download Video
      </a>
    </div>
    <VideoPlayer v-if="lesson?.videoId" :videoId="lesson.videoId" />
    <p>{{ lesson?.text }}</p>
  </div>
</template>

<style lang="scss" scoped></style>
