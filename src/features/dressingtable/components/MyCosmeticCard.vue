<template>
  <div class="my-cosmetic-card" @click="goToCosmeticDetail">
    <div class="my-cosmetic-card__image">
      <span class="my-cosmetic-card__brand">{{ cosmetic.brand }}</span>
      <img v-if="cosmetic.image" :src="cosmetic.image" :alt="cosmetic.name" />
    </div>
    <div class="my-cosmetic-card__name">
      {{ cosmetic.name }}
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'

const props = defineProps<{
  cosmetic: {
    id: number
    image?: string
    name: string
    brand: string
  }
  dressingtable: {
    id: number
  }
}>()
const router = useRouter()
const goToCosmeticDetail = () => {
  router.push(`/dressingtable/${props.dressingtable.id}/cosmetic/${props.cosmetic.id}`)
}
</script>
