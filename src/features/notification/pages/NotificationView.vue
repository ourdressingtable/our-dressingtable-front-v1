<template>
  <div class="notification-list-main">
    <section class="noticiation-list">
      <NotificationItem
        v-for="(item, index) in notifications"
        :key="index"
        :date="item.date"
        :time="item.time"
        :content="item.content"
        :isNew="item.isNew"
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import NotificationItem from '@/components/molecules/NotificationItem.vue'

interface Notification {
  date: string
  time: string
  content: string
  isNew: boolean
}

const notifications: Notification[] = [
  { date: '2026.12.24', time: '09:00', content: '앰플 사용기한이 30일 남았습니다.', isNew: true },
  { date: '2026.12.20', time: '09:00', content: '크림 사용기한이 10일 남았습니다.', isNew: false },
]
</script>
