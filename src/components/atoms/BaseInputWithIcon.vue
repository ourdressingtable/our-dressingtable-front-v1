<template>
  <div class="input-wrapper">
    <div class="input-box">
      <input
        class="base-input"
        :placeholder="placeholder"
        v-model="inputValue"
        @keyup.enter="$emit('submit')"
      />
      <button class="upload-button" type="button">
        <Icon name="Image" />
      </button>
    </div>
    <button class="send-button" @click="$emit('submit')">
      <Icon :name="icon" class="send-icon" />
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
