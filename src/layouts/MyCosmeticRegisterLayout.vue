<template>
  <div class="mycosmetic-register-layout">
    <PageHeader>
      <template #title>화장품 등록</template>
    </PageHeader>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import PageHeader from '@/components/organisms/PageHeader.vue'
</script>
