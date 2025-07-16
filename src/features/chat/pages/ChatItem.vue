<template>
  <div class="chat-item">
    <div class="chat-left">
      <div class="profile-icon">{{ chat.profile }}</div>
      <div class="chat-content">
        <div class="chat-name">{{ chat.name }}</div>
        <div class="chat-message">{{ chat.message }}</div>
      </div>
    </div>
    <div class="chat-time">{{ chat.time }}</div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  chat: {
    name: string
    message: string
    time: string
    profile: string
  }
}>()
</script>
