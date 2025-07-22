<template>
  <div class="notification-layout">
    <header class="notification-header">
      <button class="back-button" @click="router.back()">
        <Icon name="ChevronLeft" />
      </button>

      <h1 class="notification-title">알림</h1>
    </header>

    <main>
      <RouterView />
    </main>
    <TheNavBar />
  </div>
</template>

<script setup lang="ts">
import TheNavBar from '@/components/TheNavBar.vue'
import router from '@/router'
import Icon from '@/components/BaseIcon.vue'

defineOptions({
  name: 'NotificationLayout',
})
</script>
