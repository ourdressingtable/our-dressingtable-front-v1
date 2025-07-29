<template>
  <div class="category-selector">
    <BaseSelect
      v-model="selectedMain"
      :options="mainCategories"
      label="대분류"
      placeholder="대분류 선택"
    />
    <BaseSelect
      v-model="selectedSub"
      :options="subCategories"
      label="중분류"
      placeholder="중분류 선택"
    />
    <BaseSelect
      v-model="selectedLeaf"
      :options="leafCategories"
      label="소분류"
      placeholder="소분류 선택"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import BaseSelect from './BaseSelect.vue'

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

defineProps<{
  modelValue: string
}>()

const selectedMain = ref('')
const selectedSub = ref('')
const selectedLeaf = ref('')

const categoryTree = [
  {
    label: '스킨케어',
    value: 'skincare',
    children: [
      {
        label: '크림',
        value: 'cream',
        children: [
          { label: '수분크림', value: 'moisture_cream' },
          { label: '재생크림', value: 'repair_cream' },
        ],
      },
      {
        label: '로션',
        value: 'lotion',
        children: [{ label: '미백로션', value: 'whitening_lotion' }],
      },
    ],
  },
  {
    label: '메이크업',
    value: 'makeup',
    children: [
      {
        label: '립',
        value: 'lip',
        children: [
          { label: '립스틱', value: 'lipstick' },
          { label: '틴트', value: 'tint' },
        ],
      },
    ],
  },
]

const mainCategories = categoryTree.map(({ label, value }) => ({ label, value }))
const subCategories = computed(() => {
  const main = categoryTree.find((c) => c.value === selectedMain.value)
  return main?.children?.map(({ label, value }) => ({ label, value })) || []
})

const leafCategories = computed(() => {
  const main = categoryTree.find((c) => c.value === selectedMain.value)
  const sub = main?.children?.find((sc) => sc.value === selectedSub.value)
  return sub?.children?.map(({ label, value }) => ({ label, value })) || []
})

watch(selectedMain, () => {
  selectedSub.value = ''
  selectedLeaf.value = ''
})

watch(selectedSub, () => {
  selectedLeaf.value = ''
})

watch([selectedMain, selectedSub, selectedLeaf], () => {
  if (selectedMain.value && selectedSub.value && selectedLeaf.value) {
    emit(
      'update:modelValue',
      `${selectedMain.value} > ${selectedSub.value} > ${selectedLeaf.value}`,
    )
  } else {
    emit('update:modelValue', '')
  }
})
</script>
<style scoped>
.category-selector {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
