<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/auth/login">Login</RouterLink>
      <RouterLink to="/auth/register">Register</RouterLink>
    </nav>
  </header>
</template>

<script setup lang="ts">
defineOptions({
  name: 'TheHeader',
})
</script>
