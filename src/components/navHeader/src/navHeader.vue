<template>
  <div class="header lh-40 flex justify-between">
    <div class="flex align-center">
      <el-icon size="22" @click="collapseChange">
        <Expand v-if="!isCollapse" />
        <Fold v-else />
      </el-icon>
      <span class="fs-18 ml-20">面包屑</span>
    </div>
    <div class="operas">操作</div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
let isCollapse = ref(false)
const emit = defineEmits(['collapseChange'])
const collapseChange = function () {
  isCollapse.value = !isCollapse.value
  emit('collapseChange')
}
</script>
<style lang="less" scoped></style>
