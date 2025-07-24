<template>
  <div class="notification-layout">
    <BaseHeader>
      <template #title>알림</template>
      <template #menu>
        <div ref="dropdownRef" class="setting-wrapper">
          <Icon name="MoreVertical" :size="24" @click="toggleDropdown" />
          <div v-if="showDropdown" class="dropdown-menu">
            <button @click="handleSelect">알림 선택</button>
          </div>
        </div>
      </template>
    </BaseHeader>

    <main>
      <RouterView />
    </main>
    <TheNavBar />
  </div>
</template>

<script setup lang="ts">
import TheNavBar from '@/components/organisms/TheNavBar.vue'
import { RouterView } from 'vue-router'
import { ref } from 'vue'
import Icon from '@/components/BaseIcon.vue'
import BaseHeader from '@/components/organisms/BaseHeader.vue'
import { useDropdown } from '@/composables/useDropdown'

const dropdownRef = ref<HTMLElement | null>(null)
const { showDropdown, toggleDropdown } = useDropdown(dropdownRef)

const handleSelect = async () => {
  showDropdown.value = false
  alert('알림 선택')
}

defineOptions({
  name: 'NotificationLayout',
})
</script>
