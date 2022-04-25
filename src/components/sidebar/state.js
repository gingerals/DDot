import { ref, computed } from 'vue'

export const collapsed = ref(false)
export const toggleSidebar =  () => (collapsed.value = !collapsed.value)

export const sb_width = 180
export const sb_width_collapsed = 38
export const sidebarWidth = computed(
    () => `${collapsed.value ? sb_width : sb_width_collapsed}`
)