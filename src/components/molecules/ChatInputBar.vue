<template>
  <div class="chat-input">
    <input type="text" name="chat-content" placeholder="메시지를 입력해주세요" />
    <button class="send-button">
      <Icon name="plane" />
    </button>
  </div>
</template>

<script setup lang="ts">
import Icon from '@/components/BaseIcon.vue'
</script>
