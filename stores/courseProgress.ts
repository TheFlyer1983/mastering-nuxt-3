import { defineStore } from 'pinia';
import { CourseProgress } from '~~/types/course';

export const useCourseProgress = defineStore('courseProgress', () => {
  const progress = ref<CourseProgress>({});

  const initialised = ref(false);

  async function initialise() {
    if (initialised.value) return;
    initialised.value = true;

    const { data: userProgress } = await useFetch<CourseProgress>(
      '/api/user/progress',
      {
        headers: useRequestHeaders(['cookie'])
      }
    );

    if (userProgress.value) {
      progress.value = userProgress.value;
    }
  }

  const toggleComplete = async (chapter: string, lesson: string) => {
    const user = useSupabaseUser();
    if (!user.value) return;

    if (!chapter || !lesson) {
      const {
        params: { chapterSlug, lessonSlug }
      } = useRoute();
      chapter = chapterSlug as string;
      lesson = lessonSlug as string;
    }

    const currentProgress = progress.value[chapter]?.[lesson];

    progress.value[chapter] = {
      ...progress.value[chapter],
      [lesson]: !currentProgress
    };

    try {
      await $fetch(`/api/course/chapter/${chapter}/lesson/${lesson}/progress`, {
        method: 'POST',
        body: {
          completed: !currentProgress
        }
      });
    } catch (error) {
      console.error(error);

      progress.value[chapter] = {
        ...progress.value[chapter],
        [lesson]: currentProgress
      };
    }
  };

  return { initialise, progress, toggleComplete };
});
