<template>
  <div class="chat-item" @click="goToChatRoom">
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
import { useRouter } from 'vue-router'

interface Chat {
  id: number
  name: string
  message: string
  time: string
  profile: string
}

const props = defineProps<{
  chat: Chat
}>()
const router = useRouter()

const goToChatRoom = () => {
  router.push(`/chat/${props.chat.id}`)
}
</script>
