<script lang="ts" setup>
defineProps<{
  label: string;
}>();
</script>

<template>
  <div
    class="flex justify-center items-center p-2 aspect-square bg-4 rounded-lg h-full"
  >
    {{ label }}
  </div>
</template>
