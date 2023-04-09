<template>
  <div style="height: 100%">
    <el-card shadow="always" style="height: 100%">
      <search-form
        :search-form-config="searchFormConfig"
        v-model="searchFormData"
        @search="search"
      />
      <page-table :dataSourse="dataSourse" :propList="propList">
        <template #enable="scoped">
          {{ scoped.row.enable ? '启用' : '禁用' }}
        </template>
      </page-table>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue'
import { searchFormConfig } from './config/searchForm'
import { searchForm } from '@/base-ui/searchForm/'
import { pageTable } from '@/base-ui/pageTable/'
import { useStore } from 'vuex'
const searchFormData = ref({})
const store = useStore()
onMounted(() => {
  store.dispatch('systemModule/getPageList', {
    url: '/system/userList',
    data: {
      pageSize: 10,
      pageNo: 1
    }
  })
})

const propList = [
  {
    prop: 'name',
    label: '用户名',
    minwidth: '100'
  },
  {
    prop: 'realname',
    label: '真实姓名',
    minwidth: '100'
  },
  {
    prop: 'cellphone',
    label: '手机号码',
    minwidth: '100'
  },
  {
    prop: 'enable',
    label: '状态',
    minwidth: '100',
    slotName: 'enable'
  },
  {
    prop: 'createTime',
    label: '创建时间',
    minwidth: '100'
  },
  {
    prop: 'updateTime',
    label: '更新时间',
    minwidth: '100'
  }
]

const dataSourse = computed(() => {
  return store.state.systemModule.userList
})
const search = () => {
  console.log(searchFormData.value)
}
</script>

<style lang="less" scoped></style>
