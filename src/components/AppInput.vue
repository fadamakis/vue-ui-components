<script lang="ts" setup>
defineOptions({
  inheritAttrs: false,
});
defineProps({
  modelValue: {
    type: String
  },
  pill: {
    type: Boolean,
  },
});

const emit = defineEmits(['update:modelValue'] )
const updateValue = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
};
</script>

<template>
  <div class="input-wrapper">
    <input
      type="text"
      class="input"
      v-bind="$attrs"
      :value="modelValue"
      @input="updateValue"
      :class="{
        'has-prefix': $slots.prefix,
        'has-suffix': $slots.suffix,
        'has-label': $slots.label,
        pill,
      }"
    />
    <div class="label">
      <slot name="label" />
    </div>
    <div class="prefix">
      <slot name="prefix" />
    </div>
    <div class="suffix">
      <slot name="suffix" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.input-wrapper {
  position: relative;
  + .input-wrapper {
    margin-top: spacing(4);
  }
}
.input {
  box-sizing: border-box;
  width: 100%;
  background: $color-light;
  border: 1px solid $color-border;
  padding: spacing(2) spacing(5);
  outline: 0;
  border-radius: $border-radius-input;
  &.pill {
    border-radius: $border-radius-pill;
  }
  &.has-prefix {
    padding-left: spacing(12);
  }
  &.has-suffix {
    padding-right: spacing(12);
  }
  &.has-label {
    padding-top: spacing(6);
    &::placeholder {
      color: transparent;
    }
  }
}

.label {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  padding: spacing(3) spacing(5);
  margin: 2px;
  pointer-events: none;
  transform-origin: 0 0;
  transition: opacity 0.1s ease-in-out, transform 0.1s ease-in-out;
}
.input.has-prefix ~ .label {
  left: spacing(7);
}

.input:focus ~ .label,
.input:not(:placeholder-shown) ~ .label {
  opacity: 0.65;
  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
}

.prefix,
.suffix {
  display: flex;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.prefix {
  left: spacing(4);
}
.suffix {
  right: spacing(4);
}
</style>
