<script setup lang="ts">
import { onMounted, ref } from "vue";
import type { Inscription, Subject, User } from "../types";
import { useRoute } from "vue-router";
import { useGetUser } from "../composables/useFetch";
import { useGetAllActiveSubjects } from "../composables/useSubjectFetch";

const paramId = useRoute().params.id;
const userId = parseInt(paramId as string, 10);

const user = ref<User | null>(null);
const subjectList = ref<Subject[]>([]);
const inscriptions = ref<Inscription[]>([]);

const selectedSubjectsIds = ref<number[]>([]);

async function getData() {
  user.value = await useGetUser(userId);
  subjectList.value = await useGetAllActiveSubjects();
  const lsFound = localStorage.getItem("inscriptions");
  if (lsFound) inscriptions.value = JSON.parse(lsFound) as Inscription[];
  const found = inscriptions.value.find((item) => item.id === userId);
  if (found) selectedSubjectsIds.value = found.subjects.map((item) => item.id);
}

function saveLocalData() {
  if (!user.value) {
    console.error("Usuario no cargado.");
    return;
  }
  const updatedInscription: Inscription = {
    id: user.value.id,
    subjects: subjectList.value.filter((subject) =>
      selectedSubjectsIds.value.includes(subject.id)
    ),
  };
  const index = inscriptions.value.findIndex(
    (item) => item.id === user?.value?.id
  );
  if (index !== -1) {
    inscriptions.value.splice(index, 1, updatedInscription);
  } else {
    inscriptions.value.push(updatedInscription);
  }
  console.log(index);
  localStorage.setItem("inscriptions", JSON.stringify(inscriptions.value));
}

onMounted(() => {
  if (typeof userId === "number") getData();
});
</script>
<template>
  <div
    id="main-container"
    class="flex flex-col bg-5 text-1 p-3 sm:items-center sm:gap-3"
  >
    <header>
      <h1 class="text-2xl text-center">Datos del usuario</h1>
    </header>
    <main class="flex flex-col gap-4 sm:w-3/4 sm:items-center">
      <div class="bg-transparent sm:bg-4 sm:p-4 sm:rounded-xl">
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
          <p>
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
      </div>
      <div v-if="subjectList.length > 0" class="flex flex-col px-4 gap-2">
        <p class="text-xl text-center">Asignaturas inscritas</p>
        <div class="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
          <div
            class="flex items-center gap-2 sm:w-[calc(50%-10px)] md:w-[calc(33%-10px)] lg:w-[calc(25%-10px)]"
            v-for="subject in subjectList"
            :key="subject.id"
          >
            <input
              class="size-4"
              type="checkbox"
              :value="subject.id"
              :id="`subject-${subject.id}`"
              v-model="selectedSubjectsIds"
              @change="saveLocalData"
            />
            <label :for="`subject-${subject.id}`"> {{ subject.name }}</label>
          </div>
        </div>
      </div>
      <div v-else>
        <p>
          Parece que no hay Asignaturas disponibles. Intenta crear una nueva.
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
