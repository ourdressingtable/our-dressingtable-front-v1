<template>
  <div class="chat-layout">
    <header class="chat-header">
      <RouterLink to="" class="back-button"></RouterLink>
      <h1 class="chat-title">STELLA님과 채팅</h1>
      <div class="spacer"></div>
    </header>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'

defineOptions({
  name: 'ChatLayout',
})
</script>
