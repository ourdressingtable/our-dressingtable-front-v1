<template>
  <div class="comment-input">
    <BaseInputWithIcon
      v-model="comment"
      placeholder="메시지를 입력해주세요"
      icon="ArrowRight"
      @submit="handleSubmit"
    />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import BaseInputWithIcon from '../../../components/atoms/BaseInputWithIcon.vue'

const comment = ref('')
const emit = defineEmits<{
  (e: 'submit', value: string): void
}>()
const handleSubmit = () => {
  if (!comment.value.trim()) return

  emit('submit', comment.value)
  comment.value = ''
}
</script>
