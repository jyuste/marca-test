import { useAppStore } from '@/store/app'
const appStore = useAppStore()
export function changeTab() {
  const changeTab = (tab) => {
    appStore.activeTab = tab
  }
  return {
    changeTab
  }
}