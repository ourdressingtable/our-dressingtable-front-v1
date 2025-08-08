<template>
  <div class="register-form">
    <ImageUploader v-model="form.image" />
    <BaseInput v-model="form.brand" label="브랜드명" placeholder="브랜드명을 입력하세요" />
    <BaseInput v-model="form.name" label="제품명" placeholder="제품명을 입력하세요" />
    <p v-if="errors.name" class="input-error">{{ errors.name }}</p>
    <!-- <BaseSelect v-model="form.category" label="카테고리" :options="categoryOptions" /> -->
    <!-- <BaseCategorySelector v-model="form.category" label="카테고리" /> -->

    <!-- 카테고리 선택 필드 -->
    <div class="category-input-wrapper" @click="showCategoryModal = true">
      <label class="category-label" :class="{ active: form.categoryLabel }">카테고리</label>
      <div class="category-input-value">
        {{ form.categoryLabel || '' }}
      </div>
    </div>

    <CosmeticCategoryModal
      v-model="form.categoryValue"
      v-model:show="showCategoryModal"
      :category-tree="categoryTree"
      @select:labelAndValue="onSelectCategory"
    />
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
      :options="usagePeriodOptions"
    />
    <BaseDatePicker
      v-if="showCustomDateField"
      label="사용 기한"
      v-model="form.customUsageDate"
      placeholder="직접 입력 날짜 (YYYY-MM-DD)"
    />
    <p v-if="errors.customUsageDate" class="input-error">{{ errors.customUsageDate }}</p>
    <div
      class="date-input-wrapper filled"
      v-if="finalExpirationDate && form.usagePeriodAfterOpen !== 'custom'"
    >
      <label class="fixed-label">사용 기한</label>

      <p class="date-input">
        {{ finalExpirationDate }}
      </p>
    </div>
    <PriceInput v-model="form.price" label="구매가격" placeholder="" />
    <p v-if="errors.price" class="input-error">{{ errors.price }}</p>
    <BaseInput v-model="form.shop" label="구매처" placeholder="구매처를 입력하세요" />

    <div class="alarm-section">
      <div class="alarm-label">알림 설정</div>
      <BaseToggle v-model="form.alarmEnabled" />
    </div>
    <div v-if="form.alarmEnabled" class="alarm-box">
      <div class="alarm-sub-label">알림 날짜</div>
      <div class="alarm-buttons">
        <button
          v-for="option in alarmDateOptions"
          :key="option.value"
          :class="['alarm-btn', { selected: form.alarmDate === option.value }]"
          @click="form.alarmDate = option.value"
        >
          {{ option.label }}
        </button>
      </div>
    </div>
    <div class="submit-section">
      <button class="submit-btn" @click="submitForm">등록하기</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFinalExpirationDate } from '@/composables/useFinalExpirationDate'
import type { CosmeticForm } from '@/type/cosmetic'
import { computed, ref } from 'vue'
import { useFormValidation } from '@/composables/useFormValidation'
import BaseDatePicker from '@/components/atoms/BaseDatePicker.vue'
import BaseInput from '@/components/atoms/BaseInput.vue'
import BaseSelect from '@/components/atoms/BaseSelect.vue'
import BaseToggle from '@/components/atoms/BaseToggle.vue'
import ImageUploader from '@/components/atoms/ImageUploader.vue'
import PriceInput from '@/components/atoms/PriceInput.vue'
// import BaseCategorySelector from '@/components/atoms/BaseCategorySelector.vue'
import CosmeticCategoryModal from '@/components/modals/CosmeticCategoryModal.vue'

const form = ref<CosmeticForm>({
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
  alarmEnabled: false,
  alarmDate: '30',
  customUsageDate: '',
})

const categoryTree = [
  {
    label: '스킨케어',
    value: 'skincare',
    children: [
      {
        label: '크림',
        value: 'cream',
        children: [
          { label: '수분크림', value: 'moisture_cream' },
          { label: '재생크림', value: 'repair_cream' },
        ],
      },
      {
        label: '로션',
        value: 'lotion',
        children: [{ label: '미백로션', value: 'whitening_lotion' }],
      },
    ],
  },
  {
    label: '메이크업',
    value: 'makeup',
    children: [
      {
        label: '립',
        value: 'lip',
        children: [
          { label: '립스틱', value: 'lipstick' },
          { label: '틴트', value: 'tint' },
        ],
      },
    ],
  },
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

const showCategoryModal = ref(false)

const showCustomDateField = computed(() => {
  return form.value.usagePeriodAfterOpen === 'custom'
})

const { finalExpirationDate } = useFinalExpirationDate(form)

const { errors, validate } = useFormValidation(form)

function onSelectCategory({ label, value }: { label: string; value: string }) {
  form.value.categoryLabel = label
  form.value.categoryValue = value
}

const submitForm = () => {
  if (!validate()) return
  console.log('폼 전송:', form.value)
  // TODO: API 연동
}
</script>
