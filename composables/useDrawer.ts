// composables/useDrawer.ts
export const useDrawer = () => {
  const isDrawerOpen = useState('isDrawerOpen', () => false)

  const openDrawer = () => {
    isDrawerOpen.value = true
  }

  const closeDrawer = () => {
    isDrawerOpen.value = false
  }

  return {
    isDrawerOpen,
    openDrawer,
    closeDrawer
  }
}