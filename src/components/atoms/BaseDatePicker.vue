<template>
  <div class="base-date-picker">
    <input
      type="date"
      :placeholder="placeholder"
      :name="name"
      :id="id"
      :value="modelValue"
      @input="onInput"
      class="date-input"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string
  placeholder?: string
  name?: string
  id?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>
