import type { CosmeticForm } from '@/type/cosmetic'
import dayjs from 'dayjs'
import minMax from 'dayjs/plugin/minMax'
import { computed, type Ref } from 'vue'

dayjs.extend(minMax)

export function useFinalExpirationDate(form: Ref<CosmeticForm>) {
  const finalExpirationDate = computed(() => {
    const { openDate, usagePeriodAfterOpen, customUsageDate, expirationDate } = form.value

    // 사용 기한 직접 입력
    if (usagePeriodAfterOpen === 'custome') {
      return customUsageDate || ''
    }

    if (!openDate || !usagePeriodAfterOpen) return ''

    const months = Number(usagePeriodAfterOpen.replace('M', ''))
    if (isNaN(months)) return ''

    const openPlusUsage = dayjs(openDate).add(months, 'month')

    if (expirationDate) {
      return dayjs.min(openPlusUsage, dayjs(expirationDate)).format('YYYY-MM-DD')
    }

    return openPlusUsage.format('YYYY-MM-DD')
  })

  return {
    finalExpirationDate,
  }
}
