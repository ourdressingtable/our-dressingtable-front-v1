<template>
  <div class="message-row" :class="isMine ? 'mine' : 'other'">
    <div v-if="!isMine" class="profile-icon"></div>
    <div class="message-bubble">
      <p class="message-text">{{ text }}</p>
      <span class="message-time">{{ time }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  text: string
  time: string
  isMine: boolean
}>()
</script>
