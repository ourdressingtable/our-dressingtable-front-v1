<template>
  <div class="dressingtable-item" @click="goToDressingtable">
    <div class="dressingtable-image">{{ dressingtable.image }}</div>
    <div class="dressingtable-title">{{ dressingtable.title }}</div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

interface DressingTable {
  id: number
  title: string
  image: string
}

const props = defineProps<{
  dressingtable: DressingTable
}>()

const router = useRouter()

const goToDressingtable = () => {
  router.push(`/dressingtable/${props.dressingtable.id}`)
}
</script>
