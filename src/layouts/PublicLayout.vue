<template>
  <div class="layout layout-public">
    <header class="header">
      <div class="logo">OpenCap-like</div>
      <nav class="nav">
        <router-link to="/">首页</router-link>
        <router-link to="/features">功能</router-link>
        <router-link to="/pricing">定价</router-link>
        <router-link to="/login">登录</router-link>
        <router-link to="/signup" class="btn-primary">注册</router-link>
      </nav>
    </header>
    <main class="main">
      <slot />
    </main>
    <footer class="footer">
      <span>© {{ new Date().getFullYear() }} My OpenCap-like App</span>
    </footer>
  </div>
</template>

<script setup>
</script>
