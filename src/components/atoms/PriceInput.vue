<template>
  <div class="price-input-wrapper">
    <span class="prefix">₩</span>
    <input
      :value="displayValue"
      :placeholder="placeholder"
      type="text"
      inputmode="numeric"
      @input="onInput"
      class="price-input"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  modelValue: number
  placeholder?: string
}>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
}>()
const displayValue = computed(() => {
  return props.modelValue ? props.modelValue.toLocaleString() : ''
})
const onInput = (event: Event) => {
  const raw = (event.target as HTMLInputElement).value
  const numeric = Number(raw.replace(/[^\d]/g, ''))
  emit('update:modelValue', numeric)
}
</script>
