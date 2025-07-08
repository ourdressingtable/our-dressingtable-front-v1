<template>
  <div class="chat-main">
    <div class="chat-date">2026년 12월 25일 금요일</div>
    <section class="messages">
      <MessageBubble
        text="안녕하세요! 사용하시는 화장품이 뭔지 궁금해요!"
        time="오후 3:45"
        :isMine="false"
      />
      <MessageBubble text="제가 사용하는 화장품을 알려드릴게요!" time="오후 4:23" :isMine="true" />
    </section>
    <ChatInputBar />
  </div>
</template>

<script setup lang="ts">
import ChatInputBar from '@/components/molecules/ChatInputBar.vue'
import MessageBubble from '@/components/molecules/MessageBubble.vue'
</script>
