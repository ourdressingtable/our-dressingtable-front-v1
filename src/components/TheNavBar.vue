<template>
  <nav class="bottom-navbar">
    <RouterLink to="/post/postDetail" class="nav-item" active-class="active">
      <Icon name="clipboard" />
    </RouterLink>
    <RouterLink to="/chat/chatListView" class="nav-item" active-class="active">
      <Icon name="message-square" />
    </RouterLink>
    <RouterLink to="/" class="nav-item" exact-active-class="active">
      <Icon name="home" />
    </RouterLink>

    <RouterLink to="/" class="nav-item" active-class="active">
      <Icon name="user-round" />
    </RouterLink>

    <RouterLink to="/notification/notificationView" class="nav-item" active-class="active">
      <Icon name="bell" />
    </RouterLink>
  </nav>
</template>

<script setup lang="ts">
import Icon from '@/components/BaseIcon.vue'
</script>
