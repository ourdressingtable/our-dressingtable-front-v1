<template>
  <div class="chat-main">
    <div class="chat-date">2026년 12월 25일 금요일</div>
    <div class="chat-body">
      <section class="messages">
        <MessageBubble
          text="안녕하세요! 사용하시는 화장품이 뭔지 궁금해요!"
          time="오후 3:45"
          :isMine="false"
        />
        <MessageBubble
          text="제가 사용하는 화장품을 알려드릴게요!"
          time="오후 4:23"
          :isMine="true"
        />
        <MessageBubble
          text="어떤 화장품이 주로 알고 싶으신지 궁금하네요!!!"
          time="오후 4:23"
          :isMine="true"
        />
        <MessageBubble
          text="감사합니다. 알려주시면 그 화장품 그대로 똑같이 구매할 생각이에요!!!!!!"
          time="오후 5:45"
          :isMine="false"
        />
      </section>
    </div>
    <ChatInputBar />
  </div>
</template>

<script setup lang="ts">
import ChatInputBar from '@/components/molecules/ChatInputBar.vue'
import MessageBubble from '@/components/molecules/MessageBubble.vue'
</script>
