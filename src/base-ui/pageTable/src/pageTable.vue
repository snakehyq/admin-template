<template>
  <el-table :data="dataSourse">
    <template v-for="propItem in propList" :key="propItem.prop">
      <el-table-column v-bind="propItem" align="center">
        <template #default="scope">
          <slot :name="propItem.slotName" :row="scope.row">
            {{ scope.row[propItem.prop] }}
          </slot>
        </template>
      </el-table-column>
    </template>
  </el-table>
</template>

<script setup lang="ts">
const props = defineProps({
  dataSourse: {
    typeof: Array,
    default: () => []
  },
  propList: {
    typeof: Array,
    default: () => []
  }
})
</script>
