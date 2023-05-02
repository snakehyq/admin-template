<template>
  <div style="height: 100%">
    <el-card shadow="always" style="height: 100%">
      <page-content :content-config="contentConfig">
        <template #operation>
          <div></div>
        </template>
      </page-content>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { contentConfig } from './config'
import { pageContent } from '@/base-ui/pageContent/'
</script>

<style lang="less" scoped></style>
