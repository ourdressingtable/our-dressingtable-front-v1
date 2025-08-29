<template>
  <div v-if="show" class="o-modal-overlay" @click.self="close">
    <div class="c-modal c-modal--picker">
      <header class="c-modal__header">
        <h2>카테고리 선택</h2>
        <button class="close-btn" @click="close">X</button>
      </header>

      <section class="c-modal__body">
        <div class="c-modal-tabs">
          <button
            v-for="(item, index) in mainCategories"
            :key="item.value"
            class="c-modal-tabs__btn"
            :class="{ 'is-active': selectedMainIndex === index }"
            @click="selectMain(index)"
          >
            {{ item.label }}
          </button>
        </div>

        <div class="c-category-list">
          <div class="c-category-list__col">
            <div class="c-category-list__label">중분류</div>
            <button
              v-for="(item, index) in subCategories"
              :key="item.value"
              class="c-category-list__btn"
              :class="{ 'is-selected': selectedSubIndex === index }"
              @click="selectSub(index)"
            >
              {{ item.label }}
            </button>
          </div>

          <div class="c-category-list__col">
            <div class="c-category-list__label">소분류</div>
            <button
              v-for="item in leafCategories"
              :key="item.value"
              class="c-category-list__btn"
              @click="selectLeaf(item)"
            >
              {{ item.label }}
            </button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CategoryNode } from '@/type'
import { computed, ref } from 'vue'

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
  const fullLabel = `${main.label} > ${sub.label} > ${leaf.label}`
  const fullValue = `${main.value} > ${sub.value} > ${leaf.value}`

  selectedLabel.value = fullLabel
  emit('update:modelValue', fullValue)
  emit('select:labelAndValue', { label: fullLabel, value: fullValue })
  emit('update:show', false)
}

function close() {
  emit('update:show', false)
}

// function apply() {
//   // 필요 시 적용 버튼 동작 (선택 강제 확인 등)
//   emit('update:show', false)
// }
</script>

<style lang="scss" scoped>
/* 이 모달만 살짝 커스터마이즈하고 싶으면 여기서 변수로 제어 */
.c-modal {
  /* 예: 좀 더 넓게 */
  --modal-max-w: 440px;
}
</style>
