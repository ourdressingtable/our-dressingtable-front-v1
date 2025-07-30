<template>
  <div class="dressingtable-list-layout">
    <BaseHeader>
      <template #title>내 화장대</template>
      <template #menu>
        <div ref="dropdownRef" class="setting-wrapper">
          <Icon name="MoreVertical" :size="24" @click="toggleDropdown" />
          <div v-if="showDropdown" class="dropdown-menu">
            <button @click="handleSelect">화장대 선택</button>
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
import { ref } from 'vue'
import BaseHeader from '@/components/organisms/BaseHeader.vue'
import TheNavBar from '@/components/organisms/TheNavBar.vue'
import { useDropdown } from '@/composables/useDropdown'

const dropdownRef = ref<HTMLElement | null>(null)
const { showDropdown, toggleDropdown } = useDropdown(dropdownRef)

const handleSelect = async () => {
  showDropdown.value = false
  alert('화장대 선택')
}

defineOptions({
  name: 'MyDressingtableListLayout',
})
</script>
