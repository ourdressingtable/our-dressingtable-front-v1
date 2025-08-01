<template>
  <div class="dressingtable-main">
    <div class="filter-bar">
      <BaseSelect :options="categoryOptions" v-model="selectedCategory" />
      <BaseSelect :options="sortOptions" v-model="selectedSort" />
    </div>

    <div class="cosmetic-grid">
      <MyCosmeticCard v-for="cosmetic in filteredList" :key="cosmetic.id" :cosmetic="cosmetic" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
import BaseSelect from '@/components/atoms/BaseSelect.vue'
import MyCosmeticCard from '../components/MyCosmeticCard.vue'

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

const list = ref([
  { id: 1, name: '무기자차 선크림', brand: '닥터지' },
  { id: 2, name: '레티놀 앰플', brand: '이미스프리' },
  { id: 3, name: '수분 크림', brand: '아이오페' },
  { id: 4, name: '흔적 세럼', brand: '아이소이' },
])

const filteredList = computed(() =>
  list.value.filter(
    (item) => selectedCategory.value === '전체' || item.brand === selectedCategory.value,
  ),
)
</script>
<style scoped lang="scss">
.dressingtable-main {
  padding-top: 16px;

  .cosmetic-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    padding: 0 16px;
  }
}
@media (min-width: 768px) {
  .cosmetic-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
