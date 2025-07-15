<template>
  <div class="chat-item">
    <div class="profile-icon"></div>
    <div class="chat-content">
      <p class="chat-name">{{ chat.name }}</p>
      <p class="chat-name">{{ chat.message }}</p>
      <p class="chat-time">{{ chat.time }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  chat: {
    name: string
    message: string
    time: string
  }
}>()
</script>
