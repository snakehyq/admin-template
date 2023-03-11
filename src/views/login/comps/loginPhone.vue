<template>
  <div>
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      class="demo-ruleForm"
      status-icon
    >
      <el-form-item label="手机号" prop="number">
        <el-input v-model="ruleForm.number" />
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <el-input v-model="ruleForm.code">
          <template #append>
            <el-button type="primary">获取验证码 </el-button>
          </template>
        </el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { rules } from '../config/loginPhone'
import type { FormInstance } from 'element-plus'

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
  number: '',
  code: ''
})

const submitForm = async () => {
  await ruleFormRef.value.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}
const clearValidateForm = () => {
  ruleFormRef.value?.clearValidate()
}
defineExpose({
  submitForm,
  clearValidateForm
})
</script>

<style lang="less" scoped></style>
