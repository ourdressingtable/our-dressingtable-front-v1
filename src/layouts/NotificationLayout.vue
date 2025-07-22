<template>
  <div class="notification-layout">
    <PageHeader>
      <template #title>알림</template>
      <template #menu>
        <div ref="dropdownRef" class="setting-wrapper">
          <Icon name="MoreVertical" :size="24" @click="toggleDropdown" />
          <div v-if="showDropdown" class="dropdown-menu">
            <button class="danger" @click="handleReport">신고하기</button>
          </div>
        </div>
      </template>
    </PageHeader>

    <main>
      <RouterView />
    </main>
    <TheNavBar />
  </div>
</template>

<script setup lang="ts">
import TheNavBar from '@/components/TheNavBar.vue'
import { RouterView } from 'vue-router'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Icon from '@/components/BaseIcon.vue'
import PageHeader from '@/components/PageHeader.vue'

const showDropdown = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)
const toggleDropdown = () => (showDropdown.value = !showDropdown.value)

const handleOutsideClick = (e: MouseEvent) => {
  const dropdownEl = dropdownRef.value
  if (dropdownEl && !dropdownEl.contains(e.target as Node)) {
    showDropdown.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleOutsideClick)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleOutsideClick)
})

const handleReport = () => {
  alert('신고 접수 하시겠습니까?')
}

defineOptions({
  name: 'NotificationLayout',
})
</script>
