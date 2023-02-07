import { CourseOutline } from '~/server/api/course/meta.get';

export const useCourse = async () =>
  useFetchWithCache<CourseOutline>('/api/course/meta');
