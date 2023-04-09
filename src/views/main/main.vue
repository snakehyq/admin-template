<template>
  <div class="main">
    <el-container>
      <el-aside :width="!isCollapse ? '200px' : '63px'" height="100%">
        <nav-sider :is-collapse="isCollapse"></nav-sider>
      </el-aside>
      <el-container>
        <el-header>
          <nav-header
            :is-collapse="isCollapse"
            @collapseChange="isCollapse = !isCollapse"
          ></nav-header>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { navSider } from '@/components/navSider'
import { navHeader } from '@/components/navHeader'
import { ref } from 'vue'
let isCollapse = ref(false)
</script>

<style scoped lang="less">
.main {
  height: 100%;
}
.el-container {
  height: 100%;
}
</style>
