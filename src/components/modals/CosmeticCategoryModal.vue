<template>
  <div v-if="show" class="modal-overlay">
    <div class="modal-content">
      <header class="modal-header">
        <h2>카테고리 선택</h2>
        <button class="close-btn" @click="close">닫기</button>
      </header>

      <div class="tabs">
        <button
          v-for="(item, index) in mainCategories"
          :key="item.value"
          @click="selectMain(index)"
          :class="{ active: selectedMainIndex === index }"
        >
          {{ item.label }}
        </button>
      </div>
      <div class="category-list">
        <div class="column">
          <div class="label">중분류</div>
          <button
            v-for="(item, index) in subCategories"
            :key="item.value"
            @click="selectSub(index)"
            :class="{ selected: selectedSubIndex === index }"
          >
            {{ item.label }}
          </button>
        </div>
        <div class="column">
          <div class="label">소분류</div>
          <button v-for="item in leafCategories" :key="item.value" @click="selectLeaf(item)">
            {{ item.label }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

interface CategoryNode {
  label: string
  value: string
  children?: CategoryNode[]
}
const props = defineProps<{
  modelValue: string
  show: boolean
  categoryTree: CategoryNode[]
}>()
const emit = defineEmits(['update:modelValue', 'update:show', 'select:labelAndValue'])

const selectedMainIndex = ref(0)
const selectedSubIndex = ref<number | null>(null)

const mainCategories = props.categoryTree
const subCategories = computed(() => mainCategories[selectedMainIndex.value]?.children || [])
const leafCategories = computed(() => {
  if (selectedSubIndex.value === null) return []
  return subCategories.value[selectedSubIndex.value]?.children || []
})

const selectedLabel = ref('')

function selectMain(index: number) {
  selectedMainIndex.value = index
  selectedSubIndex.value = null
  selectedLabel.value = ''
}

function selectSub(index: number) {
  selectedSubIndex.value = index
  selectedLabel.value = ''
}

function selectLeaf(item: CategoryNode) {
  const main = mainCategories[selectedMainIndex.value]
  const sub = subCategories.value[selectedSubIndex.value!]
  const leaf = item
  const fullLabel = `${main.label} > ${sub.label} >${leaf.label}`
  const fullValue = `${main.value} > ${sub.value} >${leaf.value}`

  selectedLabel.value = fullLabel
  emit('update:modelValue', fullValue)
  emit('select:labelAndValue', { label: fullLabel, value: fullValue })
  emit('update:show', false)
}

function close() {
  emit('update:show', false)
}
</script>
