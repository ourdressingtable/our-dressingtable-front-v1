export interface CosmeticForm {
  image: File | null
  brand: string
  name: string
  category: string
  expirationDate: string
  openDate: string
  usagePeriodAfterOpen: string
  price: number | null
  shop: string
  alarmEnabled: boolean
  alarmDate: string
  customUsageDate: string
  finalExpirationDate: string
}
