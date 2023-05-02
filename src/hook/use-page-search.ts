import { ref } from 'vue'
import { pageContent } from '@/base-ui/pageContent/'

const pageContentRef = ref<InstanceType<typeof pageContent>>()
export function usePageSearch() {
  const handleSearch = (queryInfo: any) => {
    pageContentRef.value?.getPageContentList(queryInfo)
  }
  const handleReset = (queryInfo: any) => {
    pageContentRef.value?.getPageContentList(queryInfo)
  }
  return [pageContentRef, handleSearch, handleReset]
}
