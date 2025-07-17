<template>
  <div class="main-layout">
    <TheHeader />

    <main>
      <slot />
    </main>

    <TheFooter />
    <TheNavBar />
  </div>
</template>

<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import TheNavBar from '@/components/TheNavBar.vue'
defineOptions({
  name: 'MainLayout',
})
</script>
