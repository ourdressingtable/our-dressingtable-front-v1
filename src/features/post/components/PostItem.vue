<template>
  <li class="post-item" @click="goToDetail">
    <div class="post-content">
      <div class="post-left">
        <div class="category">{{ post.category }}</div>
        <div class="title">{{ post.title }}</div>
        <div class="bottom-line">
          <div class="author-date">
            <span>{{ post.author }}</span>
            <span>{{ post.date }}</span>
          </div>
        </div>
      </div>
      <div class="post-right">
        <div class="post-thumbnail">
          <!-- <img> -->
        </div>
        <div class="bottom-line">
          <div class="stats">
            <span><Icon name="Heart" /> {{ formatNumber(post.likeCount) }}</span>
            <span><Icon name="MessageSquare" />{{ formatNumber(post.comments) }}</span>
            <span><Icon name="Eye" />{{ formatNumber(post.viewCount) }}</span>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>

<script setup lang="ts">
import Icon from '@/components/BaseIcon.vue'
import { useRouter } from 'vue-router'
import { useFormat } from '@/composables/useFormat'

const { formatNumber } = useFormat()

interface Post {
  id: number
  category: string
  title: string
  author: string
  date: string
  likeCount: number
  comments: number
  viewCount: number
}
const props = defineProps<{
  post: Post
}>()

const router = useRouter()

const goToDetail = () => {
  router.push(`/post/${props.post.id}`)
}
</script>
