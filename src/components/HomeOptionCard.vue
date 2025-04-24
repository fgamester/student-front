<script lang="ts" setup>
defineProps<{
  label: string;
  pathTo: string;
}>();
</script>

<template>
  <div
    class="flex justify-center items-center w-28 p-2 aspect-square bg-4 rounded-lg"
  >
    <RouterLink :to="pathTo" class="flex justify-center items-center w-full">
      {{ label }}
    </RouterLink>
  </div>
</template>
