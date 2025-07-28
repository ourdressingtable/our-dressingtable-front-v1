<template>
  <div class="floating-input-wrapper" :class="{ filled: modelValue, focused }">
    <input
      :value="modelValue"
      @input="onInput"
      @focus="focused = true"
      @blur="focused = false"
      class="floating-input"
      :type="type"
    />
    <label v-if="label" class="floating-label">{{ label }}</label>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  modelValue: string
  label?: string
  type?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const focused = ref(false)

const onInput = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>
