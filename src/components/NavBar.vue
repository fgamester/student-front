<script setup lang="ts"></script>

<template>
  <nav
    id="nb-main"
    class="fixed top-0 left-0 w-screen flex justify-between p-2 bg-6 text-1 items-center"
  >
    <ul class="flex items-baseline gap-2">
      <li>
        <RouterLink class="text-2xl" to="/"> Inicio </RouterLink>
      </li>
      <li>
        <RouterLink class="text-md" to="/users"> Usuarios </RouterLink>
      </li>
    </ul>
    <RouterLink class="text-lg" to="/users/create"> Nuevo Usuario </RouterLink>
  </nav>
</template>

<style scoped>
#nb-main {
  height: 50px;
}
</style>
