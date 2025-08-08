<template>
  <div class="post-main" v-if="post">
    <section class="post-tilte">
      <h2 class="title">{{ post.title }}</h2>
      <p class="meta">{{ post.author }} | {{ post.date }}</p>
    </section>
    <section class="post-content">
      <div class="image-box"></div>
      <p class="body-text">{{ post.content }}</p>

      <div class="icons">
        <div class="icons-left">
          <span> <Icon name="Heart" />{{ post.likeCount }}</span>
          <span> <Icon name="MessageCircle" />{{ post.commentCount }}</span>
        </div>
        <div class="icons-right">
          <span> <Icon name="Eye" />{{ post.viewCount }}</span>
        </div>
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
import CommentInputBar from '@/features/post/components/CommentInputBar.vue'
import CommentItem from '../components/CommentItem.vue'
import Icon from '@/components/BaseIcon.vue'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const postId = Number(route.params.id)
const post = ref<Post | null>(null)

interface Post {
  id: number
  title: string
  content: string
  author: string
  date: string
  viewCount: number
  likeCount: number
  commentCount: number
}
onMounted(() => {
  post.value = {
    id: postId,
    title: '화장품 리뷰합니다!',
    content: '화장품 사용해봤는데, 너무 좋아요!!!!',
    author: 'Stella',
    date: '2030.12.24',
    viewCount: 123,
    likeCount: 10,
    commentCount: 2,
  }
})

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
