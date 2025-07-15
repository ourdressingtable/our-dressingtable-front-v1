<template>
  <div class="chat-list-main">
    <section class="chat-list">
      <ChatItem v-for="(chat, index) in chats" :key="index" :chat="chat" />
    </section>
  </div>
</template>

<script setup lang="ts">
import ChatItem from './ChatItem.vue'

interface Chat {
  name: string
  message: string
  time: string
}

const chats: Chat[] = [
  { name: 'May', message: 'Hello!', time: 'AM 10:10' },
  { name: 'May', message: 'Hello again!', time: 'AM 10:12' },
]
</script>
