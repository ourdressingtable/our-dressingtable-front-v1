<template>
  <div class="dressingtable-list-wrapper">
    <DressingtableItem v-for="item in dressingtables" :key="item.id" :dressingtable="item" />
  </div>
  <PlusIconButton @click="showModal = true" />
  <DressingtableRegisterModal
    v-if="showModal"
    @close="showModal = false"
    @save="addDressingtable"
  />
</template>

<script setup lang="ts">
import DressingtableRegisterModal from '@/components/modals/DressingtableRegisterModal.vue'
import DressingtableItem from '../components/DressingtableItem.vue'
import PlusIconButton from '@/components/atoms/PlusIconButton.vue'
import type { Dressingtable } from '@/type'
import { ref } from 'vue'

const showModal = ref(false)

const dressingtables = ref<Dressingtable[]>([
  { id: 1, title: '데이케어', image: '' },
  { id: 2, title: '나이트케어', image: '' },
  { id: 3, title: '데이케어', image: '' },
])

const addDressingtable = (newTable: { name: string; color: string }) => {
  dressingtables.value.push({
    id: 4,
    title: newTable.name,
    image: '',
    color: newTable.color,
  })
  showModal.value = false
}
</script>
