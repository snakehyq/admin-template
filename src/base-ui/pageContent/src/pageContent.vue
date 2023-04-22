<template>
  <div class="pageContent">
    <page-table
      :title="title"
      :showIndexColumn="showIndexColumn"
      :showSelectColumn="showSelectColumn"
      :dataSourse="dataSourse"
      :propList="propList"
    >
      <template #operation>
        <el-button type="primary">新增</el-button>
        <el-button plain>导出</el-button>
      </template>
      <template #enable="scoped">
        {{ scoped.row.enable ? '启用' : '禁用' }}
      </template>
      <template #action>
        <el-button type="primary" plain text>编辑</el-button>
        <el-button type="danger" plain text>删除</el-button>
      </template>
    </page-table>
  </div>
</template>

<script setup lang="ts">
import { pageTable } from '@/base-ui/pageTable/'

import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
onMounted(() => {
  store.dispatch('systemModule/getPageList', {
    pageName: props.pageName,
    data: {
      pageSize: 10,
      pageNo: 1
    }
  })
})

const dataSourse = computed(() => {
  console.log(store.getters['systemModule/pageListData'](props.pageName))
  return store.getters['systemModule/pageListData'](props.pageName)
})
const props = defineProps({
  propList: {
    typeof: Array,
    default: () => []
  },
  showIndexColumn: Boolean,
  showSelectColumn: Boolean,
  title: String,
  pageName: {
    typeof: String,
    require: true
  }
})
const emit = defineEmits([' '])
const handeleSelectionChange = (value) => {
  console.log(value)
  emit('selectionChange', value)
}
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
