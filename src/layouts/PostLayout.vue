<template>
    <div class="post-layout">
      <header class="post-header">
        <button class="back-button" @click="router.back()">
          <font-awesome-icon :icon="['fas', 'arrow-left']" />
        </button>
        <h1 class="post-title">커뮤니티</h1>
      </header>
  
      <main>
        <RouterView />
      </main>
    </div>
  </template>
  
  <script setup lang="ts">
  import { RouterView, useRouter } from 'vue-router'
 const router = useRouter();

  defineOptions({
    name: 'PostLayout',
  })
  </script>
  