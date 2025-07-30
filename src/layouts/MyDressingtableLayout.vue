<script setup lang="ts">
import PageHeader from '@/components/organisms/PageHeader.vue'
</script>

<template>
  <div class="dressingtable-layout">
    <PageHeader>
      <template #title> 화장대 목록</template>
    </PageHeader>
    <main>
      <RouterView />
    </main>
  </div>
</template>
