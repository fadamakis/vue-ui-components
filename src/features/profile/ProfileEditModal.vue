<script lang="ts" setup>
import AppModal from "@/components/AppModal.vue";
import ProfileEditForm from "@/features/profile/ProfileEditForm.vue";

const emit = defineEmits(["close"]);

function closeModal() {
  emit("close");
}
</script>
<template>
  <AppModal @close="closeModal">
    <template #title> Edit Profile </template>
    <template #body>
      <ProfileEditForm @submitted="closeModal" />
    </template>
  </AppModal>
</template>
