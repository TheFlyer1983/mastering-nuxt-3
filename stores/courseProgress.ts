import { defineStore } from 'pinia';

export const useCourseProgress = defineStore('courseProgress', () => {
  const progress = useLocalStorage('progress', {})

  const initialised = ref(false);

  async function initialise() {
    if (initialised.value) return;
    initialised.value = true;
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
    }
  }

  return { initialise, progress, toggleComplete }
})