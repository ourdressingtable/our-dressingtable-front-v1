<template>
  <div class="chat-list-layout">
    <header class="chat-list-header">
      <!-- <RouterLink to="/">
        <div class="logo">
          <img src="@/assets/odt_logo.svg" alt="logo" />
        </div>
      </RouterLink> -->
      <h1 class="chat-list-title">채팅</h1>
    </header>
    <main>
      <RouterView />
    </main>
    <TheNavBar />
  </div>
</template>

<script setup lang="ts">
import TheNavBar from '@/components/TheNavBar.vue'

defineOptions({
  name: 'ChatListLayout',
})
</script>
