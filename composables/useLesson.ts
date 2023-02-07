import { LessonWithPath } from '~~/types/course';

export const useLesson = async (chapterSlug: string, lessonSlug: string) => {
  const lesson = await useFetchWithCache<LessonWithPath>(
    `/api/course/chapter/${chapterSlug}/lesson/${lessonSlug}`
  );

  return lesson;
};
