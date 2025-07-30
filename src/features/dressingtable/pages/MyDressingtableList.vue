<template>
  <div class="dressingtable-list-main">
    <div class="dressingtable-list-wrapper">
      <DressingtableItem v-for="item in dressingtables" :key="item.id" :dressingtable="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import DressingtableItem from '../components/DressingtableItem.vue'

const dressingtables = [
  { id: 1, title: '데이케어', image: '' },
  { id: 2, title: '나이트케어', image: '' },
  { id: 3, title: '데이케어', image: '' },
]
</script>
