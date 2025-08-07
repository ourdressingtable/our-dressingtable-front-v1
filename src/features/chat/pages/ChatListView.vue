<template>
  <section class="chat-list">
    <ChatItem v-for="(chat, index) in chats" :key="index" :chat="chat" />
  </section>
</template>

<script setup lang="ts">
import ChatItem from '../components/ChatItem.vue'

interface Message {
  id: number
  text: string
  time: string
  isMine: boolean
}

interface Chat {
  id: number
  name: string
  message: string
  time: string
  profile: string
}
const messageMap: Record<number, Message[]> = {
  1: [
    { id: 1, text: '안녕하세요!', time: '오후 3:45', isMine: false },
    { id: 2, text: '제가 사용하는 화장품을 알려드릴게요!', time: '오후 4:23', isMine: true },
    { id: 3, text: '어떤 화장품이 궁금하신가요?', time: '오후 4:23', isMine: true },
    { id: 4, text: '감사합니다! 그대로 구매할게요!', time: '오후 5:45', isMine: false },
  ],
  2: [
    { id: 1, text: 'Summer입니다 ☀️', time: '오전 10:12', isMine: false },
    { id: 2, text: '여름 좋아하시나요?', time: '오전 10:13', isMine: false },
  ],
  3: [
    { id: 1, text: 'Joe here.', time: '오후 11:12', isMine: false },
    { id: 2, text: 'Nice to meet you.', time: '오후 11:13', isMine: true },
  ],
}

// 사용자 이름 매핑 (chatId -> name)
const userMap: Record<number, string> = {
  1: 'May',
  2: 'Summer',
  3: 'Joe',
}

// chats 배열 동적 생성
const chats: Chat[] = Object.entries(messageMap).map(([id, messages]) => {
  const last = messages[messages.length - 1]
  return {
    id: Number(id),
    name: userMap[Number(id)],
    message: last?.text ?? '',
    time: last?.time ?? '',
    profile: '', // 프로필 이미지 추가
  }
})
</script>
