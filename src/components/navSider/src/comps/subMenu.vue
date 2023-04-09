<template>
  <el-sub-menu :index="menus.url">
    <template #title>
      <el-icon><location /></el-icon>
      <span style="font-size: 17px">
        {{ menus.name }}
      </span>
    </template>
    <template v-for="menu in menus.children">
      <el-menu-item :index="menu.url" v-if="!menu.children" :key="menu.id">
        <el-icon><Document /></el-icon>
        <span style="font-size: 17px">
          {{ menu.name }}
        </span>
      </el-menu-item>
      <sub-menu v-else :menus="menu" :key="menu.id"></sub-menu>
    </template>
  </el-sub-menu>
</template>

<script setup lang="ts">
interface IMenus {
  [propName: string]: any
}
interface IProps {
  menus: IMenus
}
const props = defineProps<IProps>()
</script>

<style lang="less" scoped></style>
