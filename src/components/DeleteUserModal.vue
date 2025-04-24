<script setup lang="ts">
import { defineProps } from "vue";
import type { User } from "../types";

defineProps<{
  user: User | null;
  softDelete: (id: number) => Promise<void>;
  fullDelete: (id: number) => Promise<void>;
  cancel: () => void;
  visible: boolean;
}>();
</script>
<template>
  <div
    class="absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-10 p-3"
    v-if="visible && user"
  >
    <div class="bg-3 rounded-lg p-4 flex flex-col gap-6">
      <header class="flex flex-col gap-2">
        <h1 class="text-2xl text-center">Confirmar Eliminación</h1>
        <p class="text-center">
          ¿Estás seguro que quieres eliminar el siguiente Usuario?
        </p>
        <p class="text-center">{{ user.firstName }} {{ user.lastName }}</p>
      </header>
      <div class="flex flex-col w-full gap-3 justify-center items-center">
        <div class="flex w-full gap-3">
          <button
            @click="fullDelete(user.id)"
            class="p-2 rounded-md bg-4 w-1/2"
          >
            Permanente
          </button>
          <button
            @click="softDelete(user.id)"
            class="p-2 rounded-md bg-4 w-1/2"
          >
            Temporal
          </button>
        </div>
        <button @click="cancel" class="p-2 rounded-md bg-4 w-1/2">
          Cancelar
        </button>
      </div>
    </div>
  </div>
</template>
