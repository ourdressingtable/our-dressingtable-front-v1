<template>
  <div class="cosmetic-detail-layout">
    <main class="detail-main" v-if="loaded && data">
      <!-- 이미지 -->
      <section class="hero">
        <img v-if="data.imageUrl" :src="data.imageUrl" alt="" />
        <div v-else class="placeholder">이미지 없음</div>
        <span class="status-badge" :class="statusClass">{{ statusText }}</span>
      </section>

      <!-- 기본 정보 -->
      <section class="section">
        <h2 class="brand">{{ data.brand }}</h2>
        <p class="name">{{ data.productName }}</p>
        <div class="chips">
          <span class="chip">{{ data.category }}</span>
          <span v-if="data.colorType" class="chip outline">{{ data.colorType }}</span>
          <span v-if="data.skinType" class="chip outline">{{ data.skinType }}</span>
        </div>
      </section>

      <!-- 날짜/기한 -->
      <section class="section">
        <h3 class="section-title">사용 기한</h3>
        <ul class="kv">
          <li>
            <span>유통기한</span>
            <strong>{{ fmt(data.expirationDate) || '-' }}</strong>
          </li>
          <li>
            <span>오픈 날짜</span>
            <strong>{{ fmt(data.openDate) || '-' }}</strong>
          </li>
          <li>
            <span>오픈 후 사용기한</span>
            <strong>
              {{
                data.usagePeriodAfterOpen === 'custom'
                  ? fmt(data.customUsageDate) || '-'
                  : data.usagePeriodAfterOpen
                    ? data.usagePeriodAfterOpen
                    : '-'
              }}
            </strong>
          </li>
          <li>
            <span>최종 사용 기한</span>
            <strong>{{ finalDate || '-' }}</strong>
            <em v-if="dDay !== null" :class="{ danger: dDay < 0, warn: dDay >= 0 && dDay <= 7 }">
              {{ dDayText }}
            </em>
          </li>
        </ul>
      </section>

      <!-- 구매 정보 -->
      <section class="section">
        <h3 class="section-title">구매 정보</h3>
        <ul class="kv">
          <li>
            <span>구매가격</span><strong>{{ data.price ? formatPrice(data.price) : '-' }}</strong>
          </li>
          <li>
            <span>구매처</span><strong>{{ data.store || '-' }}</strong>
          </li>
        </ul>
      </section>

      <!-- 메모 -->
      <section class="section" v-if="data.note">
        <h3 class="section-title">메모</h3>
        <p class="note">{{ data.note }}</p>
      </section>

      <!-- 알림 -->
      <section class="section row">
        <div class="left">
          <h3 class="section-title">알림</h3>
          <p class="sub">사용기한 임박/만료 알림</p>
        </div>
        <label class="switch">
          <input type="checkbox" v-model="alarmEnabled" @change="saveAlarm" />
          <span />
        </label>
      </section>
    </main>

    <!-- 스켈레톤 -->
    <main v-else class="detail-main">
      <div class="skeleton hero"></div>
      <div class="skeleton row"></div>
      <div class="skeleton block"></div>
    </main>

    <!-- 하단 액션 -->
    <div class="bottom-actions">
      <button class="outline" @click="edit"><Icon name="Edit3" /> 수정</button>
      <button class="danger" @click="remove"><Icon name="Trash2" /> 삭제</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import dayjs from 'dayjs'
import Icon from '@/components/BaseIcon.vue'

type UsageAfterOpen = '1M' | '3M' | '6M' | '12M' | 'custom' | ''

interface CosmeticDetail {
  id: number
  brand: string
  productName: string
  category: string
  imageUrl?: string | null
  expirationDate?: string | null
  openDate?: string | null
  usagePeriodAfterOpen: UsageAfterOpen
  customUsageDate?: string | null
  price?: number | null
  store?: string | null
  colorType?: string | null
  skinType?: string | null
  note?: string | null
  alarm?: boolean
}

const route = useRoute()
const router = useRouter()
const id = Number(route.params.id)

const loaded = ref(false)
const data = ref<CosmeticDetail | null>(null)
const alarmEnabled = ref(false)

onMounted(async () => {
  // TODO: API 연동
  // const { data: res } = await api.get(`/api/cosmetics/${id}`)
  // data.value = res
  data.value = {
    id,
    brand: 'BRAND',
    productName: '에센스 123',
    category: '에센스',
    imageUrl: '',
    expirationDate: '2026-12-31',
    openDate: '2026-01-10',
    usagePeriodAfterOpen: '6M',
    customUsageDate: null,
    price: 21900,
    store: '올리브영',
    colorType: '여쿨',
    skinType: '지성',
    note: '밤에만 사용',
    alarm: true,
  }
  alarmEnabled.value = !!data.value.alarm
  loaded.value = true
})

const fmt = (d?: string | null) => (d ? dayjs(d).format('YYYY.MM.DD') : '')
const formatPrice = (n: number) => n.toLocaleString()

// 최종 사용 기한 계산 (등록 화면과 동일한 규칙)
const finalDate = computed(() => {
  if (!data.value) return ''
  const { openDate, usagePeriodAfterOpen, customUsageDate, expirationDate } = data.value
  if (usagePeriodAfterOpen === 'custom') return fmt(customUsageDate || '')
  if (!openDate || !usagePeriodAfterOpen) return fmt(expirationDate || '')
  const months = Number(usagePeriodAfterOpen.replace('M', ''))
  if (isNaN(months)) return fmt(expirationDate || '')
  const openPlus = dayjs(openDate).add(months, 'month')
  if (expirationDate) return dayjs.min(openPlus, dayjs(expirationDate)).format('YYYY.MM.DD')
  return openPlus.format('YYYY.MM.DD')
})

// D-Day / 상태
const dDay = computed(() => {
  if (!finalDate.value) return null
  const target = dayjs(finalDate.value, 'YYYY.MM.DD')
  return target.diff(dayjs(), 'day')
})
const dDayText = computed(() => {
  if (dDay.value === null) return ''
  if (dDay.value < 0) return `만료 ${Math.abs(dDay.value)}일 지남`
  if (dDay.value === 0) return '오늘 만료'
  return `D-${dDay.value}`
})
const statusClass = computed(() => {
  if (dDay.value === null) return 'neutral'
  if (dDay.value < 0) return 'expired'
  if (dDay.value <= 7) return 'soon'
  return 'ok'
})
const statusText = computed(() => {
  switch (statusClass.value) {
    case 'expired':
      return '만료'
    case 'soon':
      return '임박'
    case 'ok':
      return '정상'
    default:
      return '정보없음'
  }
})

function saveAlarm() {
  // TODO: API PATCH 호출
  // await api.patch(`/api/cosmetics/${id}/alarm`, { enabled: alarmEnabled.value })
}

function edit() {
  router.push(`/mycosmetic/${id}/edit`)
}
function remove() {
  if (confirm('정말 삭제할까요?')) {
    // await api.delete(`/api/cosmetics/${id}`)
    alert('삭제되었습니다.')
    router.replace('/mycosmetic')
  }
}
</script>
