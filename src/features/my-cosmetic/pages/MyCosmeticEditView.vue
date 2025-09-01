<template>
  <div v-if="loading" class="page-loading">불러오는 중...</div>
  <CosmeticForm
    v-else
    v-model="form"
    :is-edit="true"
    :submitting="submitting"
    @submit="updateCosmetic"
    @cancel="goBack"
    :show-cancel="true"
  />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import CosmeticForm from '@/features/my-cosmetic/components/CosmeticForm.vue'
import type { CosmeticForm as CosmeticFormType } from '@/type/cosmetic'
// import { cosmeticService } from '@/services/cosmeticService'

const route = useRoute()
const router = useRouter()

const id = Number(route.params.id)
const loading = ref(true)
const submitting = ref(false)

const form = ref<CosmeticFormType>({
  image: null,
  brand: '',
  name: '',
  categoryLabel: '',
  categoryValue: '',
  expirationDate: '',
  openDate: '',
  usagePeriodAfterOpen: '',
  price: null,
  shop: '',
  memo: '',
  alarmEnabled: false,
  alarmDate: '30',
  customUsageDate: '',
})

onMounted(fetchDetail)

async function fetchDetail() {
  try {
    loading.value = true
    // const data = await cosmeticService.getById(id)

    // form.value = mapToCosmeticForm(data)

    // 데모용 mock
    form.value = {
      image: null,
      brand: 'SOME BRAND',
      name: '기존 제품명',
      categoryLabel: '스킨케어 > 크림 > 수분크림',
      categoryValue: 'moisture_cream',
      expirationDate: '2025-12-31',
      openDate: '2025-08-01',
      usagePeriodAfterOpen: '6M',
      price: 25000,
      shop: 'OO스토어',
      memo: '테스트 메모',
      alarmEnabled: true,
      alarmDate: '7',
      customUsageDate: '',
    }
  } finally {
    loading.value = false
  }
}

async function updateCosmetic(payload: CosmeticFormType) {
  try {
    submitting.value = true
    // await cosmeticService.update(id, payload)
    router.push({ name: 'MyCosmeticDetail', params: { id } })
  } finally {
    submitting.value = false
  }
}

function goBack() {
  router.back()
}
</script>
