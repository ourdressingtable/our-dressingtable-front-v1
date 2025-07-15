<template>
  <div class="chat-list-layout">
    <header class="chat-list-header">
      <h1 class="chat-list-title">채팅</h1>
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'ChatListLayout',
})
</script>
