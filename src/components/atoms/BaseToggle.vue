<template>
  <label class="base-toggle">
    <input type="checkbox" :checked="modelValue" @change="onToggle" />
    <span class="slider" />
  </label>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const onToggle = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.checked)
}
</script>
