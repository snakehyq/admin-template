<template>
  <!-- 自定义表单组件 -->
  <el-form
    ref="formRef"
    class="elFormComponent"
    :label-width="formConfig.labelWidth"
    :model="formData"
  >
    <el-row>
      <template v-for="(item, index) in formConfig.formItem" :key="item.prop">
        <el-col :span="item.span">
          <el-form-item
            :label="item.label"
            :prop="item.prop"
            :label-width="item.labelWidth"
          >
            <!-- 输入框 -->
            <el-input
              v-if="item.type === 'input'"
              :key="index"
              v-model.trim.lazy="formData[item.prop]"
              :placeholder="item.placeholder"
              clearable
            >
            </el-input>
            <!-- 输入框textarea -->
            <el-input
              v-if="item.type === 'textarea'"
              :key="index"
              v-model.lazy="formData[item.prop]"
              :placeholder="item.placeholder"
              type="textarea"
              show-word-limit
              clearable
            >
            </el-input>
            <!-- 数字
        max: 最大值
        min：最小值
        precision：保留小数点后n位数
         -->
            <el-input
              v-if="item.type === 'number'"
              :key="index"
              v-model.trim.lazy="formData[item.prop]"
              :placeholder="item.placeholder"
              type="number"
              clearable
            >
            </el-input>
            <!-- 密码框 -->
            <el-input
              v-if="item.type === 'password'"
              :key="index"
              v-model.trim.lazy="formData[item.prop]"
              :placeholder="item.placeholder"
              type="password"
              show-password
              clearable
            />
          </el-form-item>
        </el-col>
      </template>
    </el-row>
  </el-form>
</template>
<script lang="ts" setup>
import { ref, watch } from 'vue'
import { IBaseForm } from '@/base-ui/baseForm/config'
import type { FormInstance } from 'element-plus'
type IFormConfig = IBaseForm
const props = defineProps<{
  formConfig: IFormConfig
  modelValue: any
}>()
const emit = defineEmits(['update:modelValue'])
const formRef = ref<FormInstance>()
let formData = ref({ ...props.modelValue })

watch(
  formData,
  (newVal) => {
    emit('update:modelValue', newVal)
  },
  {
    deep: true
  }
)
defineExpose({
  formRef
})
</script>
<style lang="less" scoped>
.el-cascader-node:not(.is-disabled):hover,
.el-cascader-node:not(.is-disabled):focus {
  .myMask {
    background: #f5f7fa;
  }
}
.c606266 {
  color: #606266;
}
.el-cascader-node .myMask {
  position: absolute;
  top: 10px;
  left: 20px;
  width: 14px;
  height: 14px;
  background: rgb(255, 255, 255);
  z-index: 1;
}
.el-form-item__content {
  display: flex;
  align-items: center;
}
</style>
