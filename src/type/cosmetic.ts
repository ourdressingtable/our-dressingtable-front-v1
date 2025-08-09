export interface CosmeticForm {
  image: File | null
  brand: string
  name: string
  categoryLabel: string
  categoryValue: string
  expirationDate: string
  openDate: string
  usagePeriodAfterOpen: string
  price: number | null
  shop: string
  memo: string
  alarmEnabled: boolean
  alarmDate: string
  customUsageDate: string
}
