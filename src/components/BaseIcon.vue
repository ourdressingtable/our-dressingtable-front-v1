<script setup lang="ts">
import { h, defineComponent } from 'vue'
import * as icons from 'lucide-vue-next'
import type { LucideIcon } from 'lucide-vue-next'

const props = withDefaults(
  defineProps<{
    name: keyof typeof icons
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
const IconComponent = icons[props.name] as LucideIcon

// 렌더용 컴포넌트 정의 (하위에서 렌더)
const RenderIcon = defineComponent({
  name: 'RenderIcon',
  setup() {
    return () =>
      h(IconComponent, {
        size: props.size,
        color: props.color,
        strokeWidth: props.strokeWidth,
      })
  },
})
</script>

<template>
  <RenderIcon />
</template>
