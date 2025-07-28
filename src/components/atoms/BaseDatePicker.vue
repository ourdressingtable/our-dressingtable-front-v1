<template>
  <div class="date-input-wrapper" :class="{ focused, filled: !!modelValue }">
    <label class="fixed-label">{{ label }}</label>
    <input
      type="date"
      :value="modelValue"
      @input="onInput"
      @focus="focused = true"
      @blur="focused = false"
      class="date-input"
      :placeholder="placeholder"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  modelValue: string
  label?: string
  placeholder?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const focused = ref(false)

const onInput = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>

<style scoped>
.date-input-wrapper {
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 16px 12px 4px;
  background: white;
  transition: border-color 0.2s;
  display: flex;
  flex-direction: column;
}

.date-input-wrapper.focused {
  border-color: #eba6a9;
}

.fixed-label {
  font-size: 13px;
  color: #aaa;
  transition: color 0.2s;
}

.date-input-wrapper.focused .fixed-label {
  color: #eba6a9;
}

.date-input {
  font-size: 14px;
  border: none;
  outline: none;
  background: transparent;
}
</style>
