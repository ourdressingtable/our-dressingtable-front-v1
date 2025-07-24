<template>
  <div class="comment">
    <div class="comment-header">
      <span class="author"> {{ comment.author }}</span>
      <span class="date"> {{ comment.date }} </span>
    </div>
    <div class="comment-content">{{ comment.content }}</div>
    <div v-for="(reply, i) in comment.replies" :key="i" class="reply">
      <CommentItem :comment="reply" />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Comment {
  author: string
  date: string
  content: string
  replies?: Comment[]
}
defineProps<{
  comment: Comment
}>()
</script>
