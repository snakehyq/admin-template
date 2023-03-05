<template>
  <div class="login">
    <div class="login-container">
      <h2>后台管理系统</h2>
      <login-panel />
    </div>
  </div>
</template>

<script lang="ts" setup>
import loginPanel from './comps/loginPanel'
</script>

<style lang="less" scoped>
.login {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-container {
  width: 380px;
  text-align: center;
}
</style>
