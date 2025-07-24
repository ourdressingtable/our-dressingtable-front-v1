<script setup lang="ts">
import { h, defineComponent, computed, type Component } from 'vue'
import * as lucideIcons from 'lucide-vue-next'
import IconNewMark from './atoms/IconNewMark.vue'

const allIcons = {
  ...lucideIcons,
  IconNewMark,
} as const

const props = withDefaults(
  defineProps<{
    name: string
    size?: number
    color?: string
    strokeWidth?: number
  }>(),
  {
    size: 16,
    color: 'currentColor',
    strokeWidth: 1.5,
  },
)

// 아이콘 타입 보장
const IconComponent = computed(() => allIcons[props.name as keyof typeof allIcons])

if (!IconComponent.value) {
  console.warn(`아이콘 '${props.name}'은 allIcons에 없습니다`)
}

// 렌더용 컴포넌트 정의 (하위에서 렌더)
const RenderIcon = defineComponent({
  name: 'RenderIcon',
  setup() {
    return () => {
      const component = IconComponent.value

      if (!component) {
        console.warn(`아이콘 '${props.name}'을 찾을 수 없습니다`)
        return null
      }

      return h(component as Component, {
        size: props.size,
        color: props.color,
        strokeWidth: props.strokeWidth,
      })
    }
  },
})
</script>

<template>
  <RenderIcon />
</template>
