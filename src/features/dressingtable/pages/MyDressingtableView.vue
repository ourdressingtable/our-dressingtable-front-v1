<template>
  <div class="dressingtable-main">
    <div class="cosmetic-filters">
      <BaseSelect
        variant="cosmetic"
        class="base-select"
        :options="brandOptions"
        v-model="selectedBrand"
      />
      <BaseSelect
        variant="cosmetic"
        class="base-select"
        :options="sortOptions"
        v-model="selectedSort"
      />
    </div>

    <section class="cosmetic-grid">
      <MyCosmeticCard
        v-for="cosmetic in displayedList"
        :key="cosmetic.id"
        :cosmetic="cosmetic"
        :dressingtable="dressingtable"
      />
    </section>

    <PlusIconButton class="fab" @click="goToRegister" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import BaseSelect from '@/components/atoms/BaseSelect.vue'
import MyCosmeticCard from '../components/MyCosmeticCard.vue'
import PlusIconButton from '@/components/atoms/PlusIconButton.vue'

const props = defineProps<{ id: string }>()
const router = useRouter()

const dressingtable = computed(() => ({ id: Number(props.id) }))

// 더미 데이터 (카테고리가 아닌 '브랜드' 기준으로 필터링)
const list = ref([
  { id: 1, name: '무기자차 선크림', brand: '닥터지', image: '' },
  { id: 2, name: '레티놀 앰플', brand: '이니스프리', image: '' },
  { id: 3, name: '수분 크림', brand: '아이오페', image: '' },
  { id: 4, name: '흔적 세럼', brand: '아이소이', image: '' },
])

// 셀렉트 옵션
const sortOptions = [
  { label: '등록순', value: 'latest' },
  { label: '이름순', value: 'name' },
]

// 리스트에서 브랜드를 자동 추출 (전체 포함)
const brandOptions = computed(() => {
  const set = new Set(list.value.map((v) => v.brand))
  return [{ label: '전체', value: 'all' }, ...[...set].map((b) => ({ label: b, value: b }))]
})

const selectedBrand = ref('all')
const selectedSort = ref('latest')

// 필터 + 정렬된 최종 목록
const displayedList = computed(() => {
  let arr = [...list.value]

  // 필터
  if (selectedBrand.value !== 'all') {
    arr = arr.filter((item) => item.brand === selectedBrand.value)
  }

  // 정렬
  if (selectedSort.value === 'name') {
    arr.sort((a, b) => a.name.localeCompare(b.name, 'ko'))
  } else {
    // latest: id 내림차순 가정
    arr.sort((a, b) => b.id - a.id)
  }
  return arr
})

const goToRegister = () => {
  router.push(`/dressingtable/${props.id}/add`)
}
</script>
