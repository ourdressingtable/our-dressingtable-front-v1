<template>
  <div class="register-form">
    <ImageUploader v-model="form.image" />
    <BaseInput v-model="form.brand" label="브랜드명" placeholder="브랜드명을 입력하세요" />
    <BaseInput v-model="form.name" label="제품명" placeholder="제품명을 입력하세요" />
    <p v-if="errors.name" class="input-error">{{ errors.name }}</p>
    <BaseSelect v-model="form.category" label="카테고리" :options="categoryOptions" />
    <BaseDatePicker
      v-model="form.expirationDate"
      label="유통기한"
      placeholder="유통기한 (YYYY-MM-DD)"
    />
    <p v-if="errors.expirationDate" class="input-error">{{ errors.expirationDate }}</p>
    <BaseDatePicker
      v-model="form.openDate"
      label="오픈 날짜"
      placeholder="오픈 날짜 (YYYY-MM-DD)"
    />
    <p v-if="errors.openDate" class="input-error">{{ errors.openDate }}</p>

    <BaseSelect
      v-model="form.usagePeriodAfterOpen"
      label="오픈 후 사용 기한"
      placeholder="오픈 후 사용 기한"
      :options="usagePeriodOptions"
    />
    <BaseDatePicker
      v-if="showCustomDateField"
      v-model="form.customUsageDate"
      placeholder="직접 입력 날짜 (YYYY-MM-DD)"
    />
    <p v-if="errors.customUsageDate" class="input-error">{{ errors.customUsageDate }}</p>
    <div v-if="finalExpirationDate">
      <p class="final-expiration-text">최종 만료일: {{ finalExpirationDate }}</p>
    </div>
    <PriceInput v-model="form.price" label="구매가격" placeholder="" />
    <p v-if="errors.price" class="input-error">{{ errors.price }}</p>
    <BaseInput v-model="form.shop" label="구매처" placeholder="구매처를 입력하세요" />

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
import { useFormValidation } from '@/composables/useFormValidation'

const form = ref<CosmeticForm>({
  image: null,
  brand: '',
  name: '',
  category: '',
  expirationDate: '',
  openDate: '',
  usagePeriodAfterOpen: '',
  price: null,
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

const { errors, validate } = useFormValidation(form)

// const errors = reactive<Record<string, string>>({})
// const validateForm = () => {
//   errors.name = form.value.name.trim() === '' ? '제품명을 입력해주세요.' : ''

//   if (isNaN(form.value.price) || form.value.price < 0) {
//     errors.price = '가격은 숫자로 입력해주세요.'
//   } else {
//     errors.price = ''
//   }

//   const isDate = (str: string) => /^\d{4}-\d{2}-\d{2}$/.test(str)

//   errors.openDate =
//     form.value.openDate && !isDate(form.value.openDate) ? '날짜 형식은 YYYY-MM-DD여야 합니다.' : ''

//   errors.expirationDate =
//     form.value.expirationDate && !isDate(form.value.expirationDate)
//       ? '날짜 형식은 YYYY-MM-DD여야 합니다.'
//       : ''

//   if (form.value.usagePeriodAfterOpen === 'custom') {
//     errors.customUsageDate =
//       form.value.customUsageDate && !isDate(form.value.customUsageDate)
//         ? '직접 입력 날짜 형식(YYYY-MM-DD)이 올바르지 않습니다.'
//         : ''
//   } else {
//     errors.customUsageDate = ''
//   }

//   return Object.values(errors).every((v) => v === '')
// }

const submitForm = () => {
  // if (!validateForm()) return
  if (!validate()) return
  console.log('폼 전송:', form.value)
  // TODO: API 연동
}
</script>
