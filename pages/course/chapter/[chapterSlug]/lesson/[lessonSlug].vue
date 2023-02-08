<script setup lang="ts">
import { useCourseProgress } from '~/stores/courseProgress';
const course = await useCourse();
const route = useRoute();
const { chapterSlug, lessonSlug } = route.params;
const lesson = await useLesson(chapterSlug as string, lessonSlug as string);
const user = useSupabaseUser();
const store = useCourseProgress();
const { initialise, toggleComplete } = store;

initialise();

definePageMeta({
  middleware: [
    async ({ params }, from) => {
      const course = await useCourse();

      const chapter = course.value.chapters.find(
        (chapter) => chapter.slug === params.chapterSlug
      );

      if (!chapter) {
        return abortNavigation(
          createError({
            statusCode: 404,
            message: 'Chapter not found'
          })
        );
      }

      const lesson = chapter.lessons.find(
        (lesson) => lesson.slug === params.lessonSlug
      );

      if (!lesson) {
        return abortNavigation(
          createError({
            statusCode: 404,
            message: 'Lesson not found'
          })
        );
      }
    },
    'auth'
  ]
});

const isCompleted = computed(() => store.progress?.[chapterSlug]?.[lessonSlug] || 0)

const chapter = computed(() => {
  return course.value.chapters.find(
    (chapter) => chapter.slug === route.params.chapterSlug
  );
});

const title = computed(() => `${lesson.value?.title} - ${course.value.title}`);

useHead({
  title
});
</script>

<template>
  <div>
    <p class="mt-0 mb-1 font-bold uppercase text-slate-400">
      Lesson {{ chapter?.number }} - {{ lesson?.number }}
    </p>
    <h2 class="my-0">{{ lesson?.title }}</h2>
    <div>
      <NuxtLink
        v-if="lesson?.sourceUrl"
        class="text-md font-normal text-gray-500"
        :href="lesson.sourceUrl"
      >
        Download Source Code
      </NuxtLink>
      <NuxtLink
        v-if="lesson?.downloadUrl"
        class="text-md font-normal text-gray-500"
        :href="lesson.downloadUrl"
      >
        Download Video
      </NuxtLink>
    </div>
    <VideoPlayer v-if="lesson?.videoId" :videoId="lesson.videoId" />
    <p>{{ lesson?.text }}</p>
    <LessonCompleteButton
      v-if="user"
      :modelValue="isCompleted"
      @update:modelValue="toggleComplete"
    />
  </div>
</template>

<style lang="scss" scoped></style>
