<template>
  <div class="chat-main">
    <div class="chat-date">2026년 12월 25일 금요일</div>
    <div class="chat-body">
      <section class="messages">
        <MessageBubble v-for="(msg, i) in messages" :key="i" :message="msg" />
      </section>
    </div>
    <ChatInputBar />
  </div>
</template>

<script setup lang="ts">
import ChatInputBar from '@/features/chat/components/ChatInputBar.vue'
import MessageBubble from '@/features/chat/components/MessageBubble.vue'

interface Message {
  text: string
  time: string
  isMine: boolean
}
const messages: Message[] = [
  { text: '안녕하세요!', time: '오후 3:45', isMine: false },
  { text: '제가 사용하는 화장품을 알려드릴게요!', time: '오후 4:23', isMine: true },
  { text: '어떤 화장품이 궁금하신가요?', time: '오후 4:23', isMine: true },
  { text: '감사합니다! 그대로 구매할게요!', time: '오후 5:45', isMine: false },
]
</script>
