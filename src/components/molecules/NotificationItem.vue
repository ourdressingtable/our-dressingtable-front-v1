<template>
  <div class="notification-item" :class="{ new: isNew }">
    <div class="notification-date">{{ date }} {{ time }}</div>
    <div class="notification-content">
      <span class="content-text">{{ content }}</span>
    </div>
    <span v-if="isNew" class="notification-badge">
      <Icon name="IconNewMark" color="#EBA6A9" />
    </span>
  </div>
</template>

<script setup lang="ts">
import Icon from '@/components/BaseIcon.vue'
defineProps<{
  date: string
  time: string
  content: string
  isNew?: boolean
}>()
</script>
