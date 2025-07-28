<template>
  <div class="image-uploader" @click="onClick">
    <input ref="fileInput" type="file" accept="image/*" class="file-input" @change="onFileChange" />
    <div v-if="previewUrl" class="preview">
      <img :src="previewUrl" alt="preview" />
    </div>
    <div v-else class="placeholder">
      <Icon name="Camera" />
      <span>이미지 추가</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import Icon from '@/components/BaseIcon.vue'

const props = defineProps<{
  modelValue: File | null
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: File | null): void
}>()

const fileInput = ref<HTMLInputElement | null>(null)
const previewUrl = ref<string | null>(null)

const onClick = () => {
  fileInput.value?.click()
}
const onFileChange = (e: Event) => {
  const file = (e.target as HTMLInputElement).files?.[0] || null
  emit('update:modelValue', file)

  if (file) {
    const reader = new FileReader()
    reader.onload = () => {
      previewUrl.value = reader.result as string
    }
    reader.readAsDataURL(file)
  } else {
    previewUrl.value = null
  }
}

watch(
  () => props.modelValue,
  (file) => {
    if (!file) {
      previewUrl.value = null
    }
  },
)
</script>
