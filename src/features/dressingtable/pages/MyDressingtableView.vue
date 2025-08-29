<template>
  <div class="dressingtable-main">
    <div class="cosmetic-filters">
      <div class="segmented">
        <button
          v-for="m in mainOptions"
          :key="m.value"
          type="button"
          class="segmented-btn"
          :class="{ active: m.value === selectedMain }"
          @click="onSelectMain(m.value)"
        >
          {{ m.label }}
        </button>
      </div>

      <div class="filter-row">
        <!-- TODO: 중분류 및 소분류 추후 적용 -->
        <!-- <BaseSelect
          v-if="selectedMain"
          variant="cosmetic"
          class="base-select"
          :options="subOptions"
          v-model="selectedSub"
          placeholder="중분류"
        />
        <BaseSelect
          v-if="selectedSub"
          variant="cosmetic"
          class="base-select"
          :options="leafOptions"
          v-model="selectedLeaf"
          placeholder="소분류"
        /> -->

        <BaseSelect
          variant="cosmetic"
          class="base-select"
          :options="brandOptions"
          v-model="selectedBrand"
          placeholder="브랜드"
        />
        <BaseSelect
          variant="cosmetic"
          class="base-select"
          :options="sortOptions"
          v-model="selectedSort"
          placeholder="정렬"
        />
      </div>
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

type Node = { label: string; value: string; children?: Node[] }

const categoryTree: Node[] = [
  {
    label: '기초',
    value: '기초',
    children: [
      {
        label: '스킨케어',
        value: '스킨케어',
        children: [
          { label: '스킨/토너', value: '스킨/토너' },
          { label: '로션', value: '로션' },
          { label: '에센스/앰플/세럼', value: '에센스/앰플/세럼' },
          { label: '오일', value: '오일' },
          { label: '크림', value: '크림' },
          { label: '아이케어', value: '아이케어' },
          { label: '젤', value: '젤' },
          { label: '토너 패드', value: '토너 패드' },
          { label: '기타', value: '기초-기타' },
        ],
      },
      {
        label: '클렌징',
        value: '클렌징',
        children: [
          { label: '클렌징폼', value: '클렌징폼' },
          { label: '클렌징워터', value: '클렌징워터' },
          { label: '클렌징오일', value: '클렌징오일' },
          { label: '클렌징밤', value: '클렌징밤' },
          { label: '립앤아이리무버', value: '립앤아이리무버' },
          { label: '클렌징 티슈/패드', value: '클렌징 티슈/패드' },
          { label: '기타', value: '클렌징-기타' },
        ],
      },
      {
        label: '선케어',
        value: '선케어',
        children: [
          { label: '선크림', value: '선크림' },
          { label: '선스틱', value: '선스틱' },
          { label: '선스프레이', value: '선스프레이' },
          { label: '기타', value: '선케어-기타' },
        ],
      },
      {
        label: '기타',
        value: '기초-기타전체',
        children: [
          { label: '스크럽/필링', value: '스크럽/필링' },
          { label: '스크럽/필링패드', value: '스크럽/필링패드' },
          { label: '기타', value: '기타' },
        ],
      },
    ],
  },
  {
    label: '메이크업',
    value: '메이크업',
    children: [
      {
        label: '베이스 메이크업',
        value: '베이스 메이크업',
        children: [
          { label: '메이크업베이스', value: '메이크업베이스' },
          { label: '프라이머', value: '프라이머' },
          { label: 'BB/CC 크림', value: 'BB/CC 크림' },
          { label: '파운데이션', value: '파운데이션' },
          { label: '쿠션', value: '쿠션' },
          { label: '파우더', value: '파우더' },
          { label: '컨실러', value: '컨실러' },
          { label: '블러셔', value: '블러셔' },
          { label: '하이라이터', value: '하이라이터' },
          { label: '쉐딩', value: '쉐딩' },
          { label: '톤업크림', value: '톤업크림' },
          { label: '메이크업픽서', value: '메이크업픽서' },
          { label: '기타', value: '메이크업-기타' },
        ],
      },
      {
        label: '아이메이크업',
        value: '아이메이크업',
        children: [
          { label: '아이섀도우', value: '아이섀도우' },
          { label: '아이라이너', value: '아이라이너' },
          { label: '아이브로우', value: '아이브로우' },
          { label: '마스카라/픽서', value: '마스카라/픽서' },
          { label: '속눈썹 영양제', value: '속눈썹 영양제' },
          { label: '기타', value: '아이-기타' },
        ],
      },
      {
        label: '립메이크업',
        value: '립메이크업',
        children: [
          { label: '립스틱', value: '립스틱' },
          { label: '틴트', value: '틴트' },
          { label: '립글로스', value: '립글로스' },
          { label: '립밤/립케어', value: '립밤/립케어' },
          { label: '기타', value: '립-기타' },
        ],
      },
      {
        label: '기타',
        value: '메이크업-기타전체',
        children: [{ label: '기타', value: '메이크업-기타전체-기타' }],
      },
    ],
  },
  {
    label: '바디/헤어',
    value: '바디/헤어',
    children: [
      {
        label: '바디',
        value: '바디',
        children: [
          { label: '바디워시', value: '바디워시' },
          { label: '바디크림', value: '바디크림' },
          { label: '바디로션', value: '바디로션' },
          { label: '바디오일', value: '바디오일' },
          { label: '바디스크럽', value: '바디스크럽' },
          { label: '바디미스트', value: '바디미스트' },
          { label: '핸드크림', value: '핸드크림' },
          { label: '기타', value: '바디-기타' },
        ],
      },
      {
        label: '헤어',
        value: '헤어',
        children: [
          { label: '샴푸', value: '샴푸' },
          { label: '린스/컨디셔너', value: '린스/컨디셔너' },
          { label: '헤어에센스/오일', value: '헤어에센스/오일' },
          { label: '헤어미스트', value: '헤어미스트' },
          { label: '기타', value: '헤어-기타' },
        ],
      },
    ],
  },
  { label: '기타', value: '기타' },
]

const selectedMain = ref<string>('')
const selectedSub = ref<string>('')
const selectedLeaf = ref<string>('')

const mainOptions = computed(() => categoryTree.map((n) => ({ label: n.label, value: n.value })))

// TODO: 중분류 및 소분류 추후 적용
// const subOptions = computed(() => {
//   const main = categoryTree.find((n) => n.value === selectedMain.value)
//   return main?.children?.map((n) => ({ label: n.label, value: n.value })) ?? []
// })
// const leafOptions = computed(() => {
//   const main = categoryTree.find((n) => n.value === selectedMain.value)
//   const sub = main?.children?.find((n) => n.value === selectedSub.value)
//   return sub?.children?.map((n) => ({ label: n.label, value: n.value })) ?? []
// })

function onSelectMain(v: string) {
  if (selectedMain.value === v) return
  selectedMain.value = v
  selectedSub.value = ''
  selectedLeaf.value = ''
}

const list = ref([
  { id: 1, category: '선크림', name: '무기자차 선크림', brand: '닥터지', image: '' },
  { id: 2, category: '앰플', name: '레티놀 앰플', brand: '이니스프리', image: '' },
  { id: 3, category: '수분크림', name: '수분 크림', brand: '아이오페', image: '' },
  { id: 4, category: '세럼', name: '흔적 세럼', brand: '아이소이', image: '' },
])

const sortOptions = [
  { label: '등록순', value: 'latest' },
  { label: '이름순', value: 'name' },
]

const brandOptions = computed(() => {
  const set = new Set(list.value.map((v) => v.brand))
  return [{ label: '브랜드', value: 'all' }, ...[...set].map((b) => ({ label: b, value: b }))]
})

const selectedBrand = ref('all')
const selectedSort = ref('latest')

/** 화면 표시 리스트 (현재는 브랜드/정렬만 적용: UI만 추가 요청이라 그대로 둠) */
const displayedList = computed(() => {
  let arr = [...list.value]
  if (selectedBrand.value !== 'all') {
    arr = arr.filter((item) => item.brand === selectedBrand.value)
  }
  if (selectedSort.value === 'name') arr.sort((a, b) => a.name.localeCompare(b.name, 'ko'))
  else arr.sort((a, b) => b.id - a.id)
  return arr
})

const goToRegister = () => {
  router.push(`/dressingtable/${props.id}/new`)
}
</script>
