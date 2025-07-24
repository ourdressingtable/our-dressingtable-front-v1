<template>
  <div class="input-wrapper">
    <input :placeholder="placeholder" v-model="inputValue" @keyup.enter="$emit('submit')" />
    <button @click="$emit('submit')">
      <Icon :name="icon" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Icon from '@/components/BaseIcon.vue'

const props = defineProps<{
  placeholder: string
  icon: string
  modelValue: string
}>()

const emit = defineEmits(['submit', 'update:modelValue'])

const inputValue = computed({
  get: () => props.modelValue,
  set: (val: string) => emit('update:modelValue', val),
})
</script>
