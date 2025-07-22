<template>
  <div class="page-header">
    <button class="back-button" @click="$router.back()">
      <Icon name="ChevronLeft" :size="24" />
    </button>

    <h1 class="page-title">
      <slot name="title"></slot>
    </h1>
    <slot name="menu"></slot>
  </div>
</template>

<script setup lang="ts">
import Icon from '@/components/BaseIcon.vue'
</script>
