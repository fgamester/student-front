<script setup lang="ts">
import type { Subject } from "../types";

defineProps<{
  subject: Subject;
  toDelete: (u: Subject) => void;
}>();
</script>

<template>
  <div class="w-full rounded-lg bg-4 flex justify-between p-2 gap-2">
    <RouterLink class="flex-grow min-w-0" :to="`/subjects/${subject.id}`">
      <div class="flex flex-col flex-grow">
        <p class="break-words">{{ subject.name }}</p>
      </div>
    </RouterLink>
    <div class="flex gap-2 items-center">
      <RouterLink
        :to="`/subjects/edit/${subject.id}`"
        class="bg-3 p-1 rounded-md"
      >
        Editar
      </RouterLink>
      <button class="bg-3 p-1 rounded-md" @click="toDelete(subject)">
        Borrar
      </button>
    </div>
  </div>
</template>
