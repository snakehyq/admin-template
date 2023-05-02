<template>
  <div>
    <div class="header">
      <div class="title">{{ title }}</div>
      <div>
        <slot name="operation">
          <el-button type="primary" plain size="large">新增</el-button>
        </slot>
      </div>
    </div>
    <el-table
      :data="dataSourse"
      @selection-change="handeleSelectionChange"
      v-bind="childrenProps"
    >
      <el-table-column
        v-if="showSelectColumn"
        type="selection"
        align="center"
        width="60"
      >
      </el-table-column>
      <el-table-column
        v-if="showIndexColumn"
        type="index"
        label="序号"
        align="center"
        width="80"
      >
      </el-table-column>
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
    <div class="footer" v-show="showFooter">
      <slot name="footer">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="page.pageNo"
          :page-sizes="[5, 10, 15, 20]"
          :page-size="page.pageSize"
          layout="total,sizes,prev,pager,next,jumper"
          :total="pageTotal"
        >
        </el-pagination>
      </slot>
    </div>
  </div>
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
  },
  pageTotal: {
    typeof: Number,
    default: 0
  },
  page: {
    typeof: Object,
    default: () => ({
      pageSize: 10,
      pageNo: 1
    })
  },
  showIndexColumn: Boolean,
  showSelectColumn: Boolean,
  showFooter: {
    typeof: Boolean,
    default: true
  },
  childrenProps: {
    typeof: Object,
    default: () => ({})
  },
  title: String
})
const emit = defineEmits(['selectionChange', 'update:page'])
const handeleSelectionChange = (value) => {
  console.log(value)
  emit('selectionChange', value)
}
const handleSizeChange = (pageSize) => {
  emit('update:page', { ...props.page, pageSize })
}

const handleCurrentChange = (pageNo) => {
  emit('update:page', { ...props.page, pageNo })
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
