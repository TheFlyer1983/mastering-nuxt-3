<script setup lang="ts">
const { chapters } = useCourse();
</script>

<template>
  <div
    class="flex h-full min-h-screen w-full flex-col items-center bg-gray-100 p-12"
  >
    <div class="prose mb-12">
      <h1>
        <span class="font-medium">
          Course:
          <span class="font-bold">Mastering Nuxt 3</span>
        </span>
      </h1>
    </div>

    <div class="flex flex-grow flex-row justify-center">
      <div
        class="prose mr-4 flex min-w-[20ch] max-w-[30ch] flex-col rounded-md bg-white p-8"
      >
        <h3>Chapters</h3>
        <div
          class="mb-4 flex flex-col space-y-1"
          v-for="chapter in chapters"
          :key="chapter.slug"
        >
          <h4>{{ chapter.title }}</h4>
          <NuxtLink
            v-for="(lesson, index) in chapter.lessons"
            :key="lesson.slug"
            class="prose-sm flex flex-row space-x-1 py-1 font-normal no-underline"
            :to="`/course/chapter/${chapter.slug}/lesson/${lesson.slug}`"
          >
            <span class="text-gray-500"> {{ index + 1 }}. </span>
            <span>{{ lesson.title }}</span>
          </NuxtLink>
        </div>
      </div>

      <div class="prose w-[65ch] rounded-md bg-white p-12">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
