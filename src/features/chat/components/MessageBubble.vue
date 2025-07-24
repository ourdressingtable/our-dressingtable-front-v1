<template>
  <div class="message-row" :class="message.isMine ? 'mine' : 'other'">
    <div v-if="!message.isMine" class="profile-icon"></div>
    <div class="message-bubble">
      <p class="message-text">{{ message.text }}</p>
      <span class="message-time">{{ message.time }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  message: {
    text: string
    time: string
    isMine: boolean
  }
}>()
</script>
