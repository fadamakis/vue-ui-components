<script setup lang="ts">
import AppInput from "@/components/AppInput.vue";
import AppIcon from "@/components/AppIcon.vue";
import { reactive } from "vue";

const userInfo = reactive({
  name: "Fotis",
  bio:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita deleniti laboriosam eligendi. Incidunt dolores dicta veritatis. Quaerat ad, magnam esse, illo atque delectus minus, nihil adipisci tempora nobis iusto. Excepturi?",
  location: "Barcelona",
  website: "fadamakis.com",
});

function submitForm() {
  alert('Info submitted: ' + JSON.stringify(userInfo))
}
</script>

<template>
  <main>
    <h1>Base Input Demo</h1>

    <AppInput v-model="userInfo.name" placeholder="Name">
      <template #label> Name </template>
    </AppInput>
    <AppInput v-model="userInfo.bio" placeholder="Bio">
      <template #label> Bio </template>
    </AppInput>
    <AppInput v-model="userInfo.location" placeholder="Location">
      <template #label> Location </template>

      <template #prefix>
        <AppIcon icon="pin" />
      </template>
    </AppInput>

    <AppInput v-model="userInfo.website" placeholder="Website">
      <template #label> Website </template>
      <template #prefix>
        <AppIcon icon="link" />
      </template>
    </AppInput>

    <button @click="submitForm">
      Submit <AppIcon size="2x" icon="arrow-right-circle" />
    </button>

    <hr />

    <AppInput pill name="search" placeholder="Search">
      <template #prefix>
        <AppIcon icon="search" />
      </template>
    </AppInput>

    <AppInput placeholder="Send message...">
      <template #suffix>
        <AppIcon size="2x" icon="arrow-right-circle" />
      </template>
    </AppInput>
  </main>
</template>

<style scoped lang="scss">
main {
  max-width: 720px;
  margin: 0 auto;
  margin-top: 20px;
  text-align: center;
  padding: 10px;
}

hr {
  margin: 20px auto;
}

button {
  display: flex;
  font-weight: 600;
  border-radius: 4px;
  padding: 12px 24px;
  border: 0;
  color: #000021;
  background: #1de9b6;
  cursor: pointer;
  margin: 20px auto;
  gap: 6px;
  align-items: center;
}
</style>
