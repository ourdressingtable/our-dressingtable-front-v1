import { ref, onMounted, onBeforeUnmount } from 'vue'
import type { Ref } from 'vue'

export function useDropdown(dropdownRef: Ref<HTMLElement | null>) {
  const showDropdown = ref(false)

  const toggleDropdown = () => {
    showDropdown.value = !showDropdown.value
  }

  const handleOutsideClick = (e: MouseEvent) => {
    const el = dropdownRef.value
    if (el && !el.contains(e.target as Node)) {
      showDropdown.value = false
    }
  }

  onMounted(() => {
    document.addEventListener('click', handleOutsideClick)
  })

  onBeforeUnmount(() => {
    document.removeEventListener('click', handleOutsideClick)
  })

  return {
    showDropdown,
    toggleDropdown,
  }
}
