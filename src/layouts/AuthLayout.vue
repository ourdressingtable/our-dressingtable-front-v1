<template>
  <div class="auth-layout">
    <header class="auth-header">
      <button class="back-button" @click="goBack">뒤로가기</button>
      <div class="logo">
        <img src="@/assets/odt_logo.svg" alt="logo" />
      </div>
    </header>

    <main>
      <div class="auth-card">
        <RouterView />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
defineOptions({
  name: 'AuthLayout',
})

const router = useRouter()
const goBack = () => {
  router.back()
}
</script>
