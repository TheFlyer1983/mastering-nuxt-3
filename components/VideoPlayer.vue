<script lang="ts" setup>
const props = defineProps<{
  videoId: number;
}>();
</script>

<template>
  <iframe
    width="560"
    height="315"
    :src="`https://player.vimeo.com/video/${props.videoId}`"
    title="Video player"
    frameborder="="
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</template>

<style scoped></style>
