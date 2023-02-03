<script lang="ts" setup>
withDefaults(
  defineProps<{
    modelValue: boolean;
  }>(),
  {
    modelValue: false
  }
);

defineEmits(['update:modelValue']);
</script>

<template>
  <label
    class="cursor-pointer rounded py-2 px-4 font-bold text-white"
    :class="{ 'bg-green-500': modelValue, 'bg-gray-500': !modelValue }"
  >
    <input
      type="checkbox"
      :value="modelValue"
      @input="() => $emit('update:modelValue', !modelValue)"
      class="hidden"
    />
    {{ modelValue ? 'Completed!' : 'Mark as complete' }}
  </label>
</template>

<style scoped>
::selection {
  display: none;
}
</style>
