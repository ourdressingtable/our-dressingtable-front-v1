<template>
  <div class="post-list-layout">
    <BaseHeader>
      <template #title>커뮤니티</template>
      <template #menu>
        <div ref="dropdownRef" class="setting-wrapper">
          <Icon name="MoreVertical" :size="24" @click="toggleDropdown" />
          <div v-if="showDropdown" class="dropdown-menu">
            <button @click="handleSelect">게시글 선택</button>
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
import BaseHeader from '@/components/organisms/BaseHeader.vue'
import TheNavBar from '@/components/organisms/TheNavBar.vue'
import Icon from '@/components/BaseIcon.vue'
import { ref } from 'vue'
import { useDropdown } from '@/composables/useDropdown'

const dropdownRef = ref<HTMLElement | null>(null)
const { showDropdown, toggleDropdown } = useDropdown(dropdownRef)

const handleSelect = async () => {
  showDropdown.value = false
  alert('게시글 선택')
}

defineOptions({
  name: 'PostListLayout',
})
</script>
