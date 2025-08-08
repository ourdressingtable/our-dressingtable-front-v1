<template>
  <CategoryTabs
    :categories="categories"
    :selected="selectedCategory"
    @update:selected="selectedCategory = $event"
  />
  <SearchSortBar
    :search="searchQuery"
    :sort="sortOption"
    @update:search="searchQuery = $event"
    @update:sort="sortOption = $event"
  />
  <section class="post-list">
    <PostItem v-for="(post, index) in filteredPosts" :key="index" :post="post" />
  </section>
  <!-- <button class="add-button">
    <Icon name="Plus" />
  </button> -->
  <PlusIconButton @click="goToRegister" />
</template>

<script setup lang="ts">
import PostItem from '@/features/post/components/PostItem.vue'
import CategoryTabs from '../components/CategoryTabs.vue'
import SearchSortBar from '../components/SearchSortBar.vue'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import PlusIconButton from '@/components/atoms/PlusIconButton.vue'

const categories = ['자유', '질문', '골라줘', '후기', '정보']
const selectedCategory = ref('')
const searchQuery = ref('')
const sortOption = ref('latest')

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

const posts = ref<Post[]>([
  {
    id: 1,
    title: '게시글 제목1',
    author: '닉네임1',
    date: '2026.12.31',
    category: '자유',
    viewCount: 10,
    comments: 2,
    likeCount: 5,
  },
  {
    id: 2,
    title: '게시글 제목2 입니다',
    author: '닉네임2',
    date: '2026.12.30',
    category: '질문',
    viewCount: 200000,
    comments: 5,
    likeCount: 10,
  },
  {
    id: 3,
    title: '게시글 제목3',
    author: '닉네임3',
    date: '2026.12.29',
    category: '후기',
    viewCount: 30,
    comments: 0,
    likeCount: 3,
  },
])

const filteredPosts = computed(() => {
  return posts.value
    .filter((post) => !selectedCategory.value || post.category === selectedCategory.value)
    .filter((post) => post.title.includes(searchQuery.value))
    .sort((a, b) => {
      switch (sortOption.value) {
        case 'likes':
          return b.likeCount - a.likeCount
        case 'comments':
          return b.comments - a.comments
        case 'views':
          return b.viewCount - a.viewCount
        default:
          return b.id - a.id
      }
    })
})
const router = useRouter()

const goToRegister = () => {
  router.push(`/post/register`)
}
</script>
