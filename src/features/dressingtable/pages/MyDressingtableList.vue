<template>
  <div class="dressingtable-list-wrapper">
    <DressingtableItem v-for="item in dressingtables" :key="item.id" :dressingtable="item" />
  </div>
  <PlusIconButton @click="goToRegister" />
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import DressingtableItem from '../components/DressingtableItem.vue'
import PlusIconButton from '@/components/atoms/PlusIconButton.vue'

const dressingtables = [
  { id: 1, title: '데이케어', image: '' },
  { id: 2, title: '나이트케어', image: '' },
  { id: 3, title: '데이케어', image: '' },
]

const router = useRouter()
const goToRegister = () => {
  router.push(`/dressingtable`)
}
</script>
