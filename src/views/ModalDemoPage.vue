<script setup lang="ts">
import AppButton from "@/components/AppButton.vue"
import ProfileEditModal from "@/features/profile/ProfileEditModal.vue";
import { ref } from "vue";
const isModalOpen = ref(false)
</script>

<template>
  <main>
    <h1>Base Modal Demo</h1>
    <AppButton @click="isModalOpen = true">Edit profile</AppButton>
    <ProfileEditModal v-if="isModalOpen" @close="isModalOpen = false"/>
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
</style>
