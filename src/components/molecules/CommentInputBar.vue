<template>
  <div class="comment-input">
    <input type="text" name="comment-content" placeholder="댓글을 입력해주세요" />
    <button class="send-button">
      <Icon name="ArrowRight" />
    </button>
  </div>
</template>
<script setup lang="ts">
import Icon from '@/components/BaseIcon.vue'
</script>
