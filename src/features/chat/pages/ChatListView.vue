<template>
  <div class="chat-list-main">
    <!-- <h1 class="chat-list-title">채팅</h1> -->
    <div class="chat-list-wrapper">
      <section class="chat-list">
        <ChatItem v-for="(chat, index) in chats" :key="index" :chat="chat" />
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import ChatItem from '../components/ChatItem.vue'

interface Chat {
  name: string
  message: string
  time: string
  profile: string
}

const chats: Chat[] = [
  { name: 'May', message: 'Hello!', time: 'AM 10:10', profile: '' },
  { name: 'Summer', message: 'Hello again!', time: 'AM 10:12', profile: '' },
  { name: 'Joe', message: 'Miss you', time: 'PM 11:12', profile: '' },
]
</script>
