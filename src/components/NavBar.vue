<script setup lang="ts">
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();
const fullPath = computed(() => route.path);
</script>

<template>
  <nav
    id="nb-main"
    class="fixed top-0 left-0 w-screen flex justify-start p-2 bg-6 text-1 gap-6 items-baseline"
  >
    <RouterLink class="text-2xl" to="/"> Inicio </RouterLink>
    <ul class="flex gap-3">
      <li>
        <p v-if="fullPath === '/users'" class="text-md">Usuarios</p>
        <RouterLink v-else class="text-md" to="/users"> Usuarios </RouterLink>
      </li>
      <li>
        <p v-if="fullPath === '/subjects'" class="text-md">Asignaturas</p>
        <RouterLink v-else class="text-md" to="/subjects">
          Asignaturas
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
#nb-main {
  height: 50px;
}
</style>
