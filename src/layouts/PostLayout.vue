<template>
  <div class="post-layout">
    <PageHeader>
      <template #title>커뮤니티</template>
    </PageHeader>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import PageHeader from '@/components/PageHeader.vue'
import { RouterView } from 'vue-router'

defineOptions({
  name: 'PostLayout',
})
</script>
