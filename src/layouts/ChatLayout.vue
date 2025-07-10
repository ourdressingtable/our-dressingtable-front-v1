<template>
  <div class="chat-layout">
    <header class="chat-header">
      <button class="back-button" @click="router.back()">
        <font-awesome-icon :icon="['fas', 'arrow-left']" />
      </button>

      <h1 class="chat-title">STELLA님과 채팅</h1>

      <div class="setting-wrapper" ref="dropdownRef">
        <font-awesome-icon
          :icon="['fas', 'ellipsis-vertical']"
          class="setting-icon"
          @click="toggleDropdown"
        />
        <div v-if="showDropdwon" class="dropdown-menu">
          <button @click="handleLeave">나가기</button>
          <button class="danger" @click="handleReport">신고하기</button>
        </div>
      </div>
    </header>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { RouterView, useRouter } from 'vue-router'

const showDropdwon = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)
const toggleDropdown = () => (showDropdwon.value = !showDropdwon.value)

const handleOutsideClick = (e: MouseEvent) => {
  const dropdownEl = dropdownRef.value
  if (dropdownEl && !dropdownEl.contains(e.target as Node)) {
    showDropdwon.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleOutsideClick)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleOutsideClick)
})

const router = useRouter()

const handleLeave = () => {
  alert('채팅방을 나가시겠습니까?')
}

const handleReport = () => {
  alert('신고 접수 하시겠습니까?')
}

defineOptions({
  name: 'ChatLayout',
})
</script>
