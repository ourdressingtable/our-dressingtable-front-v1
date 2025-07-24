<template>
  <div class="search-filter">
    <div class="search-wrapper">
      <Icon name="Search" />
      <input
        type="text"
        :value="search"
        @input="$emit('update:search', ($event.target as HTMLInputElement).value)"
        placeholder="검색어를 입력해주세요"
      />
      <div class="sort-display" @click="toggleDropdown">
        <span>{{ currentLabel }}</span>
        <Icon name="ChevronDown" />
        <ul v-if="showDropdown" class="sort-dropdown">
          <li
            v-for="option in options"
            :key="option.value"
            @click.stop="selectOption(option.value)"
          >
            {{ option.label }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Icon from '@/components/BaseIcon.vue'
import { useDropdown } from '@/composables/useDropdown'
import { ref, watch } from 'vue'

const props = defineProps<{
  search: string
  sort: string
}>()

const emit = defineEmits<{
  (e: 'update:search', value: string): void
  (e: 'update:sort', value: string): void
}>()

const options = [
  { label: '최신순', value: 'latest' },
  { label: '좋아요순', value: 'likes' },
  { label: '댓글순', value: 'comments' },
  { label: '조회순', value: 'views' },
]

const dropdownRef = ref<HTMLElement | null>(null)

const currentLabel = ref('')
watch(
  () => props.sort,
  (val) => {
    const selected = options.find((o) => o.value === val)
    currentLabel.value = selected?.label ?? '최신순'
  },
  { immediate: true },
)

const { showDropdown, toggleDropdown } = useDropdown(dropdownRef)

function selectOption(value: string) {
  emit('update:sort', value)
  showDropdown.value = false
}
</script>
