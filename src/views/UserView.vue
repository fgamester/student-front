<script setup lang="ts">
import { onMounted, ref } from "vue";
import type { User } from "../types";
import { useRoute } from "vue-router";
import { useGetUser } from "../composables/useFetch";

const paramId = useRoute().params.id;
const userId = parseInt(paramId as string, 10);

const user = ref<User | null>(null);

async function getData() {
  user.value = await useGetUser(userId);
}

onMounted(() => {
  if (typeof userId === "number") getData();
});
</script>
<template>
  <div id="main-container" class="bg-5 text-1 p-3">
    <header>
      <h1 class="text-2xl text-center">Datos del usuario</h1>
    </header>
    <main>
      <div id="f-name">
        <p>
          <b>Nombre:</b>
          {{ user?.firstName }}
        </p>
      </div>
      <div id="l-name">
        <p>
          <b>Apellido:</b>
          {{ user?.lastName }}
        </p>
      </div>
      <div id="email">
        <p>
          <b>E-Mail:</b>
          {{ user?.email }}
        </p>
      </div>
      <div id="phone">
        <p>
          <b>Telefono:</b>
          {{
            user?.phoneNumber ? user.phoneNumber : "No hay número resgistrado"
          }}
        </p>
      </div>
      <div id="address">
        <p >
          <b>Dirección:</b>
          {{ user?.address ? user.address : "No hay dirección registrada" }}
        </p>
      </div>
      <div id="description">
        <p class="break-words">
          <b>Descripción:</b>
          {{
            user?.description && user.description.length > 0
              ? user.description
              : "No hay descripción."
          }}
        </p>
      </div>
    </main>
  </div>
</template>

<style scoped>
#main-container {
  min-height: calc(100vh - 50px);
}
</style>
