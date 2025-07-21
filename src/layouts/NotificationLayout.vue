<template>
  <div class="notification-layout">
    <header class="notification-header">
      <button class="back-button" @click="router.back()">
        <font-awesome-icon :icon="['fas', 'arrow-left']" />>
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

defineOptions({
  name: 'NotificationLayout',
})
</script>
