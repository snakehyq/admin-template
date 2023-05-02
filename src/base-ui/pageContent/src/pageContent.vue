<template>
  <div class="pageContent">
    <page-table
      :dataSourse="dataSourse"
      v-bind="contentConfig"
      :page-total="pageTotal"
      v-model:page="pageLoad"
    >
      <!-- :title="title"
      :showIndexColumn="showIndexColumn"
      :showSelectColumn="showSelectColumn"
      :propList="propList" -->
      <template #operation>
        <slot name="operation"></slot>
      </template>
      <template
        v-for="item in propSlots"
        :key="item.prop + 'slot-name'"
        #[item.slotName]="scoped"
      >
        <slot :name="item.slotName" :row="scoped.row"></slot>
      </template>
    </page-table>
  </div>
</template>

<script setup lang="ts">
import { pageTable } from '@/base-ui/pageTable/'
import { computed, ref, watch } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const pageLoad = ref({
  pageSize: 10,
  pageNo: 1
})

watch(pageLoad, (newVal) => {
  getPageContentList()
})
const getPageContentList = (queryInfo: any = {}) => {
  store.dispatch('systemModule/getPageList', {
    pageName: props.contentConfig.pageName,
    data: {
      ...pageLoad.value,
      ...queryInfo
    }
  })
}
getPageContentList()
const dataSourse = computed(() => {
  return store.getters['systemModule/pageListData'](
    props.contentConfig.pageName
  )
})
console.log('dataSourse', dataSourse)

const pageTotal = computed(() => {
  return store.getters['systemModule/pageCountData'](
    props.contentConfig.pageName
  )
})
const props = defineProps({
  contentConfig: {
    typeof: Object,
    require: true
  }
})
console.log(74, props)

// 动态插槽，跨组件插槽的使用
// 获取到配置中propList中的所有插槽
const propSlots = props.contentConfig.propList.filter((item) => item.slotName)

const emit = defineEmits(['selectionChange'])
const handeleSelectionChange = (value) => {
  console.log(value)
  emit('selectionChange', value)
}
defineExpose({
  getPageContentList
})
</script>
<style scoped lang="less">
.header {
  margin-top: 50px;
  justify-content: space-between;
  display: flex;
  background-color: #f5f5f5;
  align-items: center;
  padding: 5px 20px;
}
.footer {
  margin-top: 20px;
  float: right;
}
</style>
