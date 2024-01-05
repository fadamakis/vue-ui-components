<template>
    <button><slot /></button>
</template>

<style scoped lang="scss">
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