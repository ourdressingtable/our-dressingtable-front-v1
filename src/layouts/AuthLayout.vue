<template>
  <div class="auth-layout">
    <header class="auth-header">
      <RouterLink to="/">
        <div class="logo">
          <img :src="odtLogo" alt="logo" />
        </div>
      </RouterLink>
    </header>

    <main>
      <div class="auth-card">
        <RouterView />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import odtLogo from '@/assets/odt_logo.svg?url'
defineOptions({
  name: 'AuthLayout',
})
</script>
