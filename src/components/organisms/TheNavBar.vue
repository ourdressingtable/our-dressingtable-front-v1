<template>
  <nav class="bottom-navbar">
    <RouterLink to="/post/postDetail" class="nav-item" active-class="active">
      <Icon name="Clipboard" :size="24" />
    </RouterLink>
    <RouterLink to="/chat/chatListView" class="nav-item" active-class="active">
      <Icon name="MessageSquare" :size="24" />
    </RouterLink>
    <RouterLink to="/" class="nav-item" exact-active-class="active">
      <Icon name="Home" :size="24" />
    </RouterLink>

    <RouterLink to="/" class="nav-item" active-class="active">
      <Icon name="UserRound" :size="24" />
    </RouterLink>

    <RouterLink to="/notification/notificationView" class="nav-item" active-class="active">
      <Icon name="Bell" :size="24" />
    </RouterLink>
  </nav>
</template>

<script setup lang="ts">
import Icon from '../BaseIcon.vue'
</script>
