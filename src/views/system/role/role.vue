<template>
  <div style="height: 100%">
    <el-card shadow="always" style="height: 100%">
      <search-form
        :search-form-config="searchFormConfig"
        v-model="searchFormData"
        @search="handleSearch"
        @reset="handleReset"
      />
      <page-content ref="pageContentRef" :content-config="contentConfig">
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
      </page-content>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { searchFormConfig, contentConfig } from './config'
import { searchForm } from '@/base-ui/searchForm/'
import { pageContent } from '@/base-ui/pageContent/'
import { usePageSearch } from '@/hook/use-page-search.ts'
const searchFormData = ref({})
const search = () => {
  console.log(searchFormData.value)
}

const [pageContentRef, handleSearch, handleReset] = usePageSearch()
</script>

<style lang="less" scoped></style>
