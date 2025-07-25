<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :name="name"
    :id="id"
    :maxlength="maxlength"
    :autocomplete="autocomplete"
    :value="modelValue"
    @input="onInput"
    class="base-input"
  />
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string
  type?: string
  placeholder?: string
  name?: string
  id?: string
  maxlength?: string
  autocomplete?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>
