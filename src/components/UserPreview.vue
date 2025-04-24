<script setup lang="ts">
import type { User } from "../types";

defineProps<{
  user: User;
  toDelete: (u: User) => void;
}>();
</script>

<template>
  <div class="w-full rounded-lg bg-4 flex justify-between p-2 gap-2">
    <RouterLink class="flex-grow min-w-0" :to="`/users/${user.id}`">
      <div class="flex flex-col flex-grow">
        <p>{{ user.firstName }} {{ user.lastName }}</p>
        <p>
          {{ user.email }}
        </p>
      </div>
    </RouterLink>
    <div class="flex gap-2 items-center">
      <RouterLink :to="`/users/edit/${user.id}`" class="bg-3 p-1 rounded-md">
        Editar
      </RouterLink>
      <button class="bg-3 p-1 rounded-md" @click="toDelete(user)">
        Borrar
      </button>
    </div>
  </div>
</template>
