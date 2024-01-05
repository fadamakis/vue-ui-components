<script setup lang="ts">
import AppInput from "@/components/AppInput.vue";
import AppIcon from "@/components/AppIcon.vue";
import AppButton from "@/components/AppButton.vue";
import { reactive } from "vue";

const userInfo = reactive({
  name: "Fotis",
  bio:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita deleniti laboriosam eligendi. Incidunt dolores dicta veritatis. Quaerat ad, magnam esse, illo atque delectus minus, nihil adipisci tempora nobis iusto. Excepturi?",
  location: "Barcelona",
  website: "fadamakis.com",
});

const emit = defineEmits(['submitted'])

function submitForm() {
  alert('Info submitted: ' + JSON.stringify(userInfo))

  emit('submitted')
}
</script>

<template>
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

    <AppButton @click="submitForm">
      Submit <AppIcon size="2x" icon="arrow-right-circle" />
    </AppButton>
</template>
