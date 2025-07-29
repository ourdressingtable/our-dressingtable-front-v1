<template>
  <div class="dropdown-wrapper" ref="wrapper">
    <div
      class="dropdown-trigger"
      :class="{ open: showOptions, filled: selectedOption }"
      @click="toggleDropdown"
    >
      <label class="dropdown-label" :class="{ floated: showOptions || selectedOption }">
        {{ label }}
      </label>
      <span class="dropdown-value">
        {{ selectedLabel || placeholder }}
      </span>
      <Icon name="ChevronDown" class="dropdown-arrow" />
    </div>

    <ul v-if="showOptions" class="dropdown-menu">
      <li
        v-for="option in options"
        :key="option.value"
        :class="{ selected: option.value === modelValue }"
        @click="selectOption(option)"
      >
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Icon from '@/components/BaseIcon.vue'

const props = defineProps<{
  modelValue: string
  options: { label: string; value: string }[]
  label?: string
  placeholder?: string
}>()

const emit = defineEmits(['update:modelValue'])

const showOptions = ref(false)
const wrapper = ref<HTMLElement | null>(null)

const selectedOption = computed(() => props.options.find((opt) => opt.value === props.modelValue))

const selectedLabel = computed(() => selectedOption.value?.label ?? '')

function toggleDropdown() {
  showOptions.value = !showOptions.value
}

function selectOption(option: { label: string; value: string }) {
  emit('update:modelValue', option.value)
  showOptions.value = false
}
</script>

<style scoped lang="scss"></style>
