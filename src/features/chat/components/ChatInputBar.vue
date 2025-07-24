<template>
  <div class="chat-input-bar">
    <BaseInputWithIcon
      v-model="message"
      placeholder="메시지를 입력해주세요"
      icon="Send"
      @submit="handleSend"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseInputWithIcon from '../../../components/atoms/BaseInputWithIcon.vue'

const message = ref('')
const emit = defineEmits<{
  (e: 'send', value: string): void
}>()
const handleSend = () => {
  if (!message.value.trim()) return

  emit('send', message.value)
  message.value = ''
}
</script>
