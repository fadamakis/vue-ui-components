<script setup lang="ts">
// https://icons.getbootstrap.com/
import BootstrapIcons from "bootstrap-icons/bootstrap-icons.svg";
import { type PropType } from "vue";

enum IconSizes {
  "sm",
  "md",
  "lg",
  "2x",
  "3x",
  "4x",
  "5x",
}

defineProps({
  icon: {
    type: String,
    required: true,
  },
  size: {
    type: String as PropType<keyof typeof IconSizes>,
    default: "md",
  },
  clickable: {
    type: Boolean,
  },
});
</script>

<template>
  <svg class="icon" :class="[`icon-size-${size}`, { clickable }]">
    <g transform-origin="center">
      <use v-bind:xlink:href="`${BootstrapIcons}#${icon}`" />
    </g>
  </svg>
</template>

<style scoped lang="scss">
.icon {
  width: 1em;
  height: 1em;
}
.clickable {
  cursor: pointer;
}
.icon-size {
  &-sm {
    font-size: $font-size-0;
  }
  &-md {
    font-size: $font-size-1;
  }
  &-lg {
    font-size: $font-size-2;
  }
  &-2x {
    font-size: $font-size-3;
  }
  &-3x {
    font-size: $font-size-4;
  }
  &-4x {
    font-size: $font-size-5;
  }
  &-5x {
    font-size: $font-size-6;
  }
}
</style>
