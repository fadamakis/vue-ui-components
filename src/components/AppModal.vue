<script setup lang="ts">
import AppIcon from "@/components/AppIcon.vue";

const emit = defineEmits(["close"]);

function closeModal() {
  emit("close");
}
</script>

<template>
  <Teleport to="body">
    <div class="modal" @click="closeModal">
      <div class="modal-content" @click.stop>
        <div class="title" v-if="$slots.title">
          <slot name="title" />
        </div>
        <AppIcon icon="x" size="4x" @click="closeModal" clickable class="close" />
        <slot name="body"/>
      </div>
    </div>
  </Teleport>
</template>

<style lang="scss" scoped>
.modal {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;

  background-color: $color-backdrop;
}
.modal-content {
  position: relative;
  max-width: 600px;
  width: 100%;
  padding: spacing(4);
  margin: 0 spacing(3);

  background-color: $color-white;
  border-radius: $border-radius;
}
.title {
  font-size: $font-size-3;
  font-weight: 700;
  margin-bottom: spacing(2);
}
.close {
  position: absolute;
  top: spacing(3);
  right: spacing(3);
}
</style>
