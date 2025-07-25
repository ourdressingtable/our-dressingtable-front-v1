import type { CosmeticForm } from '@/type/CosmeticForm'
import dayjs from 'dayjs'
import minMax from 'dayjs/plugin/minMax'
import { computed, type Ref } from 'vue'

dayjs.extend(minMax)

export function useFinalExpirationDate(form: Ref<CosmeticForm>) {
  const finalExpirationDate = computed(() => {
    const openDate = form.value.openDate
    const usage = form.value.usagePeriodAfterOpen
    const custom = form.value.customUsageDate
    const expirationDate = form.value.expirationDate

    if (!openDate || !usage) return ''

    if (usage === 'custom') {
      return custom || ''
    }

    const months = Number(usage.replace('M', ''))
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
