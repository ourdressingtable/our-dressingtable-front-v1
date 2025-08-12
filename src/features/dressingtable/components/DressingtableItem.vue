<!-- <template>
  <div class="dressingtable-item" @click="goToDressingtable">
    <div class="dressingtable-image">{{ dressingtable.image }}</div>
    <div class="dressingtable-title">{{ dressingtable.title }}</div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

interface DressingTable {
  id: number
  title: string
  image: string
}

const props = defineProps<{
  dressingtable: DressingTable
}>()

const router = useRouter()

const goToDressingtable = () => {
  router.push(`/dressingtable/${props.dressingtable.id}`)
}
</script> -->
<template>
  <button class="dressingtable-item" @click="goToDressingtable">
    <div class="thumb" :style="{ backgroundColor: avatar.bg, color: avatar.fg }">
      <img v-if="dressingtable.image" :src="dressingtable.image" :alt="dressingtable.title" />
      <span v-else class="initial">{{ avatar.initial }}</span>
    </div>

    <div class="meta">
      <div class="title">{{ dressingtable.title }}</div>
      <div v-if="subtitle" class="subtitle">{{ subtitle }}</div>
    </div>

    <svg class="chevron" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M9 6l6 6-6 6"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

interface DressingTable {
  id: number
  title: string
  image?: string
  color?: string
}

const props = defineProps<{
  dressingtable: DressingTable
  subtitle?: string
}>()

// 간단한 이니셜+컬러
function makeAvatar(text = '', fallbackColor?: string) {
  const initial = text.trim().charAt(0).toUpperCase() || '?'
  let hash = 0
  for (let i = 0; i < text.length; i++) hash = text.charCodeAt(i) + ((hash << 5) - hash)
  const hue = Math.abs(hash) % 360
  return {
    initial,
    bg: fallbackColor || `hsl(${hue} 70% 95%)`,
    fg: `hsl(${hue} 35% 30%)`,
  }
}
const avatar = makeAvatar(props.dressingtable.title, props.dressingtable.color)

const router = useRouter()
const goToDressingtable = () => {
  router.push(`/dressingtable/${props.dressingtable.id}`)
}
</script>
