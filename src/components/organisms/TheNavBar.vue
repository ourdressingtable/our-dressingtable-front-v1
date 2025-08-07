<template>
  <nav class="bottom-navbar">
    <RouterLink to="/post" class="nav-item" active-class="active">
      <Icon name="Clipboard" :size="24" />
    </RouterLink>
    <RouterLink to="/chat" class="nav-item" active-class="active">
      <Icon name="MessageSquare" :size="24" />
    </RouterLink>
    <RouterLink to="/dressingtable" class="nav-item" exact-active-class="active">
      <Icon name="Home" :size="24" />
    </RouterLink>

    <RouterLink to="/member/profile" class="nav-item" active-class="active">
      <Icon name="UserRound" :size="24" />
    </RouterLink>

    <RouterLink to="/notification" class="nav-item" active-class="active">
      <Icon name="Bell" :size="24" />
    </RouterLink>
  </nav>
</template>

<script setup lang="ts">
import Icon from '../BaseIcon.vue'
</script>
