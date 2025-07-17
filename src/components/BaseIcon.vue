<template>
  <component :is="iconComponent" class="icon" :class="`icon--${name}`" />
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'

const props = defineProps<{
  name: string
}>()

const iconComponent = computed(() => {
  try {
    return defineAsyncComponent(() => import(`@/assets/icons/${props.name}.svg`))
  } catch (e) {
    console.warn(`Icon not found: ${props.name}`, e)
    return null
  }
})
</script>
