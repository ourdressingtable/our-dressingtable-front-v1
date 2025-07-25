<template>
  <div class="register-form">
    <ImageUploader v-model="form.image" />
    <BaseInput v-model="form.brand" placeholder="브랜드명을 입력하세요" />
    <BaseInput v-model="form.name" placeholder="제품명을 입력하세요" />
    <BaseSelect
      v-model="form.category"
      placeholder="카테고리를 선택하세요"
      :options="categoryOptions"
    />
    <BaseDatePicker v-model="form.expirationDate" placeholder="유통기한 (YYYY-MM-DD)" />
    <BaseDatePicker v-model="form.openDate" placeholder="오픈 날짜 (YYYY-MM-DD)" />
    <BaseSelect
      v-model="form.usagePeriodAfterOpen"
      placeholder="오픈 후 사용 기한"
      :options="usagePeriodOptions"
    />
    <BaseDatePicker
      v-if="showCustomDateField"
      v-model="form.customUsageDate"
      placeholder="직접 입력 날짜 (YYYY-MM-DD)"
    />
    <div v-if="finalExpirationDate">
      <p class="final-expiration-text">최종 만료일: {{ finalExpirationDate }}</p>
    </div>
    <PriceInput v-model="form.price" placeholder="0" />
    <BaseInput v-model="form.shop" placeholder="구매처를 입력하세요" />

    <div class="alarm-section">
      <div class="alarm-label">알림 설정</div>
      <BaseToggle v-model="form.alarmEnabled" />
    </div>
    <div v-if="form.alarmEnabled" class="alarm-button">
      <button
        v-for="option in alarmDateOptions"
        :key="option.value"
        :class="['alarm-btn', { selected: form.alarmDate === option.value }]"
        @click="form.alarmDate = option.value"
      >
        {{ option.label }}
      </button>
    </div>
    <div class="submit-section">
      <button class="submit-btn" @click="submitForm">등록하기</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseDatePicker from '@/components/atoms/BaseDatePicker.vue'
import BaseInput from '@/components/atoms/BaseInput.vue'
import BaseSelect from '@/components/atoms/BaseSelect.vue'
import BaseToggle from '@/components/atoms/BaseToggle.vue'
import ImageUploader from '@/components/atoms/ImageUploader.vue'
import PriceInput from '@/components/atoms/PriceInput.vue'
import { useFinalExpirationDate } from '@/composables/useFinalExpirationDate'
import type { CosmeticForm } from '@/type/CosmeticForm'
import { computed, ref } from 'vue'

const form = ref<CosmeticForm>({
  image: null,
  brand: '',
  name: '',
  category: '',
  expirationDate: '',
  openDate: '',
  usagePeriodAfterOpen: '',
  price: 0,
  shop: '',
  alarmEnabled: false,
  alarmDate: '',
  customUsageDate: '',
  finalExpirationDate: '',
})

const categoryOptions = [
  { label: '스킨케어 > 크림', value: 'skincare_cream' },
  { label: '메이크업 > 립스틱', value: 'makeup_lipstick' },
  { label: '헤어 > 샴푸', value: 'hair_shampoo' },
]
const usagePeriodOptions = [
  { label: '1개월', value: '1M' },
  { label: '3개월', value: '3M' },
  { label: '6개월', value: '6M' },
  { label: '12개월', value: '12M' },
  { label: '직접 입력', value: 'custom' },
]
const alarmDateOptions = [
  { label: 'D-30', value: '30' },
  { label: 'D-7', value: '7' },
  { label: 'D-Day', value: '0' },
]

const showCustomDateField = computed(() => {
  return form.value.usagePeriodAfterOpen === 'custom'
})

const { finalExpirationDate } = useFinalExpirationDate(form)

const submitForm = () => {
  console.log('폼 전송:', form.value)
  // TODO: 유효성 검사 및 API 연동
}
</script>
