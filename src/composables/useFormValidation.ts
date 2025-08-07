import { reactive, type Ref } from 'vue'
import type { CosmeticForm } from '@/type/cosmetic'

export function useFormValidation(form: Ref<CosmeticForm>) {
  const errors = reactive<Record<string, string>>({})

  const isDate = (str: string) => /^\d{4}-\d{2}-\d{2}$/.test(str)

  const validate = () => {
    errors.name = form.value.name.trim() === '' ? '제품명을 입력해주세요.' : ''

    if (typeof form.value.price === 'number' && !isNaN(form.value.price) && form.value.price >= 0) {
      errors.price = ''
    } else {
      errors.price = '가격은 0 이상의 숫자여야 합니다.'
    }
    errors.openDate =
      form.value.openDate && !isDate(form.value.openDate)
        ? '오픈 날짜 형식이 올바르지 않습니다. (YYYY-MM-DD)'
        : ''

    errors.expirationDate =
      form.value.expirationDate && !isDate(form.value.expirationDate)
        ? '유통기한 형식이 올바르지 않습니다. (YYYY-MM-DD)'
        : ''

    errors.customUsageDate =
      form.value.usagePeriodAfterOpen === 'custom' && form.value.customUsageDate
        ? !isDate(form.value.customUsageDate)
          ? '직접 입력 날짜 형식이 올바르지 않습니다. (YYYY-MM-DD)'
          : ''
        : ''

    return Object.values(errors).every((v) => v === '')
  }

  return {
    errors,
    validate,
  }
}
