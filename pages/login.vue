<script setup lang="ts">
import { Provider } from '@supabase/gotrue-js';

const course = await useCourse();
const { query } = useRoute();
const supabase = useSupabaseClient();
const user = useSupabaseUser();

watchEffect(async () => {
  if (user.value) {
    await navigateTo(query.redirectTo as string, { replace: true });
  }
});

const login = async (provider: Provider) => {
  const redirectTo = `${window.location.origin}${query.redirectTo}`;
  const { error } = await supabase.auth.signInWithOAuth({
    provider,
    options: { redirectTo }
  });

  if (error) {
    console.log(error);
  }
};
</script>

<template>
  <div class="prose h-9 w-full max-w-2xl">
    <h1>Log in to {{ course.title }}</h1>
    <button
      class="rounded bg-blue-500 py-2 px-4 font-bold text-white"
      @click="login('github')"
    >
      <span><font-awesome-icon icon="fa-brands fa-github" /></span>
      <span class="pl-3">Log in with Github</span>
    </button>
  </div>
</template>

<style lang="scss" scoped></style>
