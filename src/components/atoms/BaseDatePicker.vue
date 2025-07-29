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
