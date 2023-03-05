<template>
  <div class="login-panel">
    <el-tabs type="border-card" class="demo-tabs" stretch @tab-click="tabClick">
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><UserFilled /></el-icon>
            <span>用户登录</span>
          </span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Cellphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <login-phone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>
    <div class="login-controll">
      <el-checkbox v-model="isKeyPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button class="submit" type="primary" @click="login">立即登录</el-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import loginAccount from './loginAccount'
import loginPhone from './loginPhone'
import type { TabsPaneContext } from 'element-plus'
const isKeyPassword = ref(true)
const accountRef = ref<InstanceType<typeof loginAccount>>()
const phoneRef = ref<InstanceType<typeof loginPhone>>()
let tabIndex = 0
const tabClick = (tab: TabsPaneContext, event: Event) => {
  tabIndex = Number(tab.index)
  tabIndex
    ? accountRef.value?.clearValidateForm()
    : phoneRef.value?.clearValidateForm()
}
const login = () => {
  tabIndex ? phoneRef.value?.submitForm() : accountRef.value?.submitForm()
  console.log('登录')
}
</script>

<style lang="less" scoped>
.login-controll {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}
.submit {
  margin-top: 10px;
  width: 100%;
}
.custom-tabs-label {
  .el-icon {
    vertical-align: middle;
  }
  span {
    vertical-align: middle;
    margin-left: 4px;
  }
}
</style>
