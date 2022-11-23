<template>
  <div class="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h2>{{ $store.state.name }}</h2>
    <router-link to="/login">登录</router-link>
    <router-link to="/">首页</router-link>
    <router-view></router-view>
    <Login></Login>
  </div>
</template>

<script lang="ts" setup>
import Login from '@/views/login/login'
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
