<template>
  <div>
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      class="demo-ruleForm"
      status-icon
    >
      <el-form-item label="用户" prop="name">
        <el-input v-model="ruleForm.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="ruleForm.password"
          type="password"
          autocomplete="off"
        />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { rules } from '../config/loginAccount'
import type { FormInstance, FormRules } from 'element-plus'
import storage from '@/utls/storage'
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
  name: storage.getStorage('name') || '',
  password: storage.getStorage('password') || ''
})

const submitForm = async (isKeyPassword: boolean) => {
  await ruleFormRef.value.validate((valid, fields) => {
    if (valid) {
      // 记住密码
      if (isKeyPassword) {
        storage.setStorage('name', ruleForm.name)
        storage.setStorage('password', ruleForm.password)
      } else {
        storage.deleteStorage('name')
        storage.deleteStorage('password')
      }
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
