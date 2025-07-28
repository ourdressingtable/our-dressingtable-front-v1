<template>
  <div class="floating-input-wrapper" :class="{ filled: !!modelValue, focused }">
    <span v-if="focused || typeof modelValue === 'number'" class="prefix">₩</span>
    <input
      type="text"
      :value="displayValue"
      @input="onInput"
      @focus="focused = true"
      @blur="focused = false"
      class="floating-input"
      inputmode="numeric"
    />
    <label class="floating-label" :class="{ float: focused || modelValue !== null }">
      {{ label }}
    </label>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps<{
  modelValue: number | null
  label?: string
  placeholder?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: number | null): void
}>()

const focused = ref(false)
const hasInteracted = ref(false)

const displayValue = computed(() => {
  if (!hasInteracted.value && (props.modelValue === null || props.modelValue === 0)) {
    return ''
  }

  return typeof props.modelValue === 'number' && !isNaN(props.modelValue)
    ? props.modelValue.toLocaleString()
    : ''
})

const onInput = (e: Event) => {
  hasInteracted.value = true
  const raw = (e.target as HTMLInputElement).value
  const cleaned = raw.replace(/[^\d]/g, '')
  if (cleaned === '') {
    emit('update:modelValue', null)
  } else {
    emit('update:modelValue', Number(cleaned))
  }
}
</script>
