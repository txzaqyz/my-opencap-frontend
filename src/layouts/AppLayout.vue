<template>
  <div class="layout layout-app">
    <aside class="sidebar">
      <div class="sidebar-logo">OpenCap-like</div>
      <nav class="sidebar-nav">
        <router-link to="/dashboard">仪表盘</router-link>
        <router-link to="/projects">项目</router-link>
        <router-link to="/capture">采集/上传</router-link>
        <router-link to="/sessions">会话/分析</router-link>
        <router-link to="/profile">个人中心</router-link>
      </nav>
    </aside>
    <div class="content-wrapper">
      <header class="topbar">
        <div class="topbar-title">
          {{ $route.meta.title || '控制台' }}
        </div>
        <div class="topbar-right">
          <span class="user-name">Hi, User</span>
        </div>
      </header>
      <main class="main">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
</script>
