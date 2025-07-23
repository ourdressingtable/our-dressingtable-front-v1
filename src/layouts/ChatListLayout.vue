<template>
  <div class="chat-list-layout">
    <BaseHeader>
      <template #title>채팅</template>
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
import BaseHeader from '@/components/BaseHeader.vue'
import TheNavBar from '@/components/TheNavBar.vue'
import Icon from '@/components/BaseIcon.vue'
import { ref } from 'vue'

const showDropdown = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)
const toggleDropdown = () => (showDropdown.value = !showDropdown.value)

const handleSelect = () => {
  alert('채팅 선택')
}

defineOptions({
  name: 'ChatListLayout',
})
</script>
