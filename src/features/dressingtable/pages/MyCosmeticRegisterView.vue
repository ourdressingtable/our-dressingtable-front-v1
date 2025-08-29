<template>
  <CosmeticForm
    v-model="form"
    :is-edit="false"
    :submitting="submitting"
    @submit="createCosmetic"
    @cancel="goBack"
    :show-cancel="true"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CosmeticForm from '@/components/forms/CosmeticForm.vue'
import type { CosmeticForm as CosmeticFormType } from '@/type/cosmetic'
import { useRouter } from 'vue-router'
// import { cosmeticService } from '@/services/cosmeticService' // 실제 서비스에 맞게 사용

const router = useRouter()
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

async function createCosmetic(payload: CosmeticFormType) {
  try {
    submitting.value = true
    // await cosmeticService.create(payload)
    // 성공 후 목록/상세로 이동
    router.push({ name: 'MyCosmeticList' })
  } finally {
    submitting.value = false
  }
}

function goBack() {
  router.back()
}
</script>
