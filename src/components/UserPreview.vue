<script setup lang="ts">
import type { User } from "../types";

defineProps<{
  user: User;
}>();
</script>

<template>
  <div class="w-full rounded-lg bg-4 flex justify-between p-2 gap-2">
    <RouterLink :to="`/users/${user.id}`">
      <div class="flex flex-col flex-grow">
        <p>{{ user.firstName }} {{ user.lastName }}</p>
        <p>
          {{ user.email }}
        </p>
      </div>
    </RouterLink>
    <div class="flex gap-2 items-center">
      <button class="bg-3 p-1 rounded-md">Editar</button>
      <button class="bg-3 p-1 rounded-md">Borrar</button>
    </div>
  </div>
</template>
