<script lang="ts" setup>
import HomeOptionCard from "../components/HomeOptionCard.vue";
</script>

<template>
  <div class="w-full flex flex-col gap-3 p-2">
    <header>
      <p class="text-center">Bienvenido al panel de Gestión de Usuarios</p>
    </header>
    <main class="flex w-full justify-evenly gap-1 px-3 sm:gap-5 sm:justify-center">
      <HomeOptionCard label="Users" path-to="/users" />
      <HomeOptionCard label="Asignaturas" path-to="/subjects" />
    </main>
  </div>
</template>
