<template>
  <div class="floating-input-wrapper" :class="{ filled: modelValue, focused }">
    <select
      :value="modelValue"
      @change="onChange"
      @focus="focused = true"
      @blur="focused = false"
      class="floating-input"
    >
      <!-- <option disabled value="">{{ placeholder }}</option> -->
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
    <label class="floating-label">{{ label }}</label>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  modelValue: string
  options: { label: string; value: string }[]
  label?: string
  placeholder?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const focused = ref(false)

const onChange = (e: Event) => {
  const target = e.target as HTMLSelectElement
  emit('update:modelValue', target.value)
}
</script>
