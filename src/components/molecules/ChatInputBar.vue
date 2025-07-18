<template>
  <div class="chat-input">
    <input type="text" placeholder="메시지를 입력해주세요" />
    <button class="send-button">
      <!-- <font-awesome-icon :icon="['fas', 'paper-plane']" /> -->
      <Icon name="plane" />
    </button>
  </div>
</template>

<script setup lang="ts">
import Icon from '@/components/BaseIcon.vue'
</script>
