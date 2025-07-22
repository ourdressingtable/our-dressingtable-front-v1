<template>
  <div class="page-header">
    <button class="back-button" @click="$router.back()">
      <Icon name="ChevronLeft" :size="24" />
    </button>

    <h1 class="page-title">
      <slot name="title" />
    </h1>

    <div class="setting-wrapper">
      <slot name="menu">
        <!-- 기본 메뉴 아이콘 -->
        <Icon name="MoreVertical" :size="24" />
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import Icon from '@/components/BaseIcon.vue'
</script>
