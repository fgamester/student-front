<script lang="ts" setup>
import HomeOptionCard from "../components/HomeOptionCard.vue";
</script>

<template>
  <div class="w-full flex flex-col gap-3 p-2">
    <header>
      <h1>Home</h1>
      <p>Bienvenido a la pagina principal</p>
    </header>
    <main class="flex w-full justify-evenly">
      <RouterLink to="/users">
        <HomeOptionCard label="Users" />
      </RouterLink>
      <RouterLink to="/subjects">
        <HomeOptionCard label="Asignaturas" />
      </RouterLink>
    </main>
  </div>
</template>
