<script setup lang="ts">
const { chapters } = useCourse();

const resetError = (error: any) => {
  error.value = null
}
</script>

<template>
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
          :to="lesson.path"
          :class="{ 'text-blue-500': lesson.path === $route.path }"
        >
          <span class="text-gray-500"> {{ index + 1 }}. </span>
          <span>{{ lesson.title }}</span>
        </NuxtLink>
      </div>
    </div>

    <div class="prose w-[65ch] rounded-md bg-white p-12">
      <NuxtErrorBoundary>
        <NuxtPage />
        <template #error="{ error }">
          <p>
            Oh no, something went wrong with the lesson!
            <code>{{ error }}</code>
          </p>
          <p>
            <button
              class="bg-gray-500 py-1 px-3 font-bold text-white hover:cursor-pointer"
              @click="resetError(error)"
            >
              Reset
            </button>
          </p>
        </template>
      </NuxtErrorBoundary>
    </div>
  </div>
</template>

<!-- <style scoped>
.router-link-active {
  @apply text-blue-500;
}
</style> -->
