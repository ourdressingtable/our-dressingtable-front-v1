<template>
  <div class="post-main">
    <section class="content">
      <h2 class="title">화장품 리뷰합니다!</h2>
      <p class="meta">Stella | 2030.12.24</p>
      <div class="image-box"></div>
      <p class="body-text">화장품 사용해봤는데, 너무 좋아요!!!!</p>

      <div class="icons">
        <span> <font-awesome-icon :icon="['far', 'heart']" />10</span>
        <span> <font-awesome-icon :icon="['far', 'comment']" />10</span>
        <span> <font-awesome-icon :icon="['far', 'eye']" />10</span>
      </div>
    </section>

    <section class="comments">
      <p class="comment-count">댓글</p>
      <CommentItem v-for="(comment, i) in comments" :key="i" :comment="comment" />
    </section>

    <CommentInputBar />
  </div>
</template>

<script setup lang="ts">
import CommentInputBar from '@/components/molecules/CommentInputBar.vue'
import CommentItem from './CommentItem.vue'

interface CommentItem {
  author: string
  date: string
  content: string
  replies?: CommentItem[]
}

const comments: CommentItem[] = [
  {
    author: '김댓글',
    content: '좋은 정보에요!',
    date: '2030.12.24',
    replies: [
      { author: '김코멘트', content: '좋은 정보에요!', date: '2030.12.24' },
      { author: '김작성', content: '감사합니다!', date: '2030.12.24' },
    ],
  },
  { author: '유댓글', content: '좋습니다!', date: '2030.12.25' },
]
</script>
