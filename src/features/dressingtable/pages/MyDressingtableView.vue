<template>
  <div class="dressingtable-main">
    <div class="filter-bar">
      <BaseSelect :options="categoryOptions" v-model="selectedCategory" />
      <BaseSelect :options="sortOptions" v-model="selectedSort" />
    </div>

    <div class="cosmetic-grid"></div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import BaseSelect from '@/components/atoms/BaseSelect.vue'

const selectedCategory = ref('전체')
const selectedSort = ref('등록순')

const sortOptions = [
  { label: '등록순', value: 'latest' },
  { label: '이름순', value: 'name' },
]

const categoryOptions = [
  { label: '전체', value: 'all' },
  { label: '크림', value: 'cream' },
  { label: '앰플', value: 'ample' },
  { label: '선크림', value: 'sunscreen' },
  { label: '에센스', value: 'essence' },
]

// const list = ref([
//   { id: 1, name: '무기자차 선크림' },
//   { id: 2, name: '레티놀 앰플' },
//   { id: 3, name: '닥터지 크림' },
//   { id: 4, name: '흔적 세럼' },
// ])

// const filteredList = computed(() => {
//   list.value.filter(
//     (item) => selectedCategory.value === '전체' || item.brand === selectedCategory.value,
//   )
// })
</script>
