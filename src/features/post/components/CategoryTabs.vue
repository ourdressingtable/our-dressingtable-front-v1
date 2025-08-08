<template>
  <div class="category-tabs">
    <button
      v-for="category in categories"
      :key="category"
      :class="['category-button', { active: category === selected }]"
      @click="$emit('update:selected', category)"
    >
      {{ category }}
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  categories: string[]
  selected: string
}>()
defineEmits<{
  (e: 'update:selected', value: string): void
}>()
</script>
