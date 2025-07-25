<template>
  <div class="base-select-wrapper">
    <select
      :name="name"
      :id="id"
      :disabled="disabled"
      :value="modelValue"
      @change="onChange"
      class="base-select"
    >
      <option v-if="placeholder" disabled value="">
        {{ placeholder }}
      </option>
      <option v-for="(option, index) in options" :key="index" :value="option.value">
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name?: string
  id?: string
  placeholder?: string
  disabled?: boolean
  modelValue: string | number
  options: { label: string; value: string | number }[]
}>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
}>()

const onChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>
