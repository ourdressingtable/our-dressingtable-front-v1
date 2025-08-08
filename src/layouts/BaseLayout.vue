<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref, watchEffect } from 'vue'
import { onClickOutside } from '@vueuse/core'
import BaseHeader from '@/components/organisms/BaseHeader.vue'
import TheNavBar from '@/components/organisms/TheNavBar.vue'
import Icon from '@/components/BaseIcon.vue'
import type { DropdownItem } from '@/type'

const route = useRoute()

const emit = defineEmits<{
  (e: 'selectDropdown', item: DropdownItem): void
}>()

const title = ref('')
const dropdownItems = ref<DropdownItem[]>([])
const hasDropdown = ref(false)

const showDropdown = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value
}

const handleClick = (item: DropdownItem) => {
  emit('selectDropdown', item)
  showDropdown.value = false
}

onClickOutside(dropdownRef, () => {
  showDropdown.value = false
})

watchEffect(() => {
  showDropdown.value = false
  const meta = route.meta
  title.value = (meta.title as string) || ''
  dropdownItems.value = (meta.dropdownItems as DropdownItem[]) || []
  hasDropdown.value = dropdownItems.value.length > 0
})
</script>

<template>
  <div class="base-layout">
    <BaseHeader>
      <template #title>{{ title }}</template>
      <template #menu v-if="hasDropdown">
        <div ref="dropdownRef" class="setting-wrapper">
          <Icon name="MoreVertical" :size="24" @click="toggleDropdown" />
          <div v-if="showDropdown" class="header-dropdown-menu">
            <button
              v-for="item in dropdownItems"
              :key="item.value"
              :class="{ danger: item.danger }"
              @click="() => handleClick(item)"
            >
              {{ item.label }}
            </button>
          </div>
        </div>
      </template>
    </BaseHeader>

    <main class="layout-main">
      <RouterView />
    </main>
    <TheNavBar />
  </div>
</template>
