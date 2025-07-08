<template>
  <div class="auth-layout">
    <header class="auth-header">
      <RouterLink to="/">
        <div class="logo">
        <img src="@/assets/odt_logo.svg" alt="logo" />
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
defineOptions({
  name: 'AuthLayout',
})
</script>
