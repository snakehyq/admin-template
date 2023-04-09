<template>
  <div class="nav-sider" style="height: 100%">
    <div class="menu-title" :style="{ width: isCollapse ? '63px' : '200px' }">
      <span v-if="!isCollapse">Vue + Ts</span>
    </div>
    <el-menu
      :collapse-transition="false"
      :collapse="isCollapse"
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      default-active="2"
      router
      text-color="#fff"
      @open="handleOpen"
      @close="handleClose"
    >
      <template v-for="menu in menus">
        <el-menu-item :index="menu.url" v-if="!menu.children" :key="menu.id">
          <template #title>
            <el-icon><Document /></el-icon>
            <span style="font-size: 17px">
              {{ menus.name }}
            </span>
          </template>
        </el-menu-item>
        <sub-menu v-else :menus="menu" :key="menu.id"></sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, defineProps } from 'vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting
} from '@element-plus/icons-vue'
import subMenu from './comps/subMenu'
import { menus } from './data'
// import { toRefs } from 'vue'

const props = defineProps({
  isCollapse: Boolean
})
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style lang="less" scoped>
.menu-title {
  height: 55px;
  color: skyblue;
  font-size: 24px;
  text-align: center;
  background-color: #545c64;
  line-height: 55px;
}
.el-menu-vertical-demo {
  height: calc(100% - 55px);
}
</style>
