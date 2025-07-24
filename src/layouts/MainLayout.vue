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
import TheHeader from '@/components/organisms/TheHeader.vue'
import TheFooter from '@/components/organisms/TheFooter.vue'
import TheNavBar from '@/components/organisms/TheNavBar.vue'
defineOptions({
  name: 'MainLayout',
})
</script>
