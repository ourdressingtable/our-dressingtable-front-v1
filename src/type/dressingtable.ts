export interface Dressingtable {
  id: number
  title: string
  image: string
  color?: string
}

export interface CategoryNode {
  label: string
  value: string
  children?: CategoryNode[]
}
