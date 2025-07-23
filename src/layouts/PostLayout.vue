<template>
  <div class="post-layout">
    <PageHeader>
      <template #title>커뮤니티</template>

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
  </div>
</template>

<script setup lang="ts">
import PageHeader from '@/components/PageHeader.vue'
import Icon from '@/components/BaseIcon.vue'
import { RouterView } from 'vue-router'
import { ref } from 'vue'
import { useConfirm } from '@/composables/useConfirm'
import { useDropdown } from '@/composables/useDropdown'

const confirm = useConfirm()
const dropdownRef = ref<HTMLElement | null>(null)
const { showDropdown, toggleDropdown } = useDropdown(dropdownRef)

const handleReport = async () => {
  showDropdown.value = false
  const confirmed = await confirm('신고를 접수하시겠습니까?')
  if (confirmed) {
    console.log('신고 접수 완료')
  } else {
    console.log('신고 취소')
  }
}

defineOptions({
  name: 'PostLayout',
})
</script>
