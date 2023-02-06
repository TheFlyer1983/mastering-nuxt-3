<script setup lang="ts">
const { title } = useCourse();
const supabase = useSupabaseClient();

const login = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'github'
  });

  if (error) {
    console.log(error);
  }
};
</script>

<template>
  <div class="prose h-9 w-full max-w-2xl">
    <h1>Log in to {{ title }}</h1>
    <button
      class="rounded bg-blue-500 py-2 px-4 font-bold text-white"
      @click="login"
    >
      Log in with Github
    </button>
  </div>
</template>

<style lang="scss" scoped></style>
