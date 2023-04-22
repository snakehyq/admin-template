<template>
  <div style="height: 100%">
    <el-card shadow="always" style="height: 100%">
      <search-form
        :search-form-config="searchFormConfig"
        v-model="searchFormData"
        @search="search"
      />
      <page-content v-bind="contentConfig" page-name="/role"> </page-content>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { searchFormConfig, contentConfig } from './config'
import { searchForm } from '@/base-ui/searchForm/'
import { pageContent } from '@/base-ui/pageContent/'
const searchFormData = ref({})
const search = () => {
  console.log(searchFormData.value)
}
</script>

<style lang="less" scoped></style>
