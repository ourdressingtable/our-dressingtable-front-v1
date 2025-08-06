<script setup lang="ts">
import PageHeader from '@/components/organisms/PageHeader.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <div class="dressingtable-layout">
    <PageHeader>
      <template #title> {{ route.meta.title }}</template>
    </PageHeader>
    <main>
      <RouterView />
    </main>
  </div>
</template>
