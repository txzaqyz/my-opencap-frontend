<template>
  <section>
    <h1>会话详情：{{ sessionId }}</h1>
    <p>这里将展示视频播放器、时间轴曲线、3D 骨骼视图等。</p>
    <p>当前只是占位页面。</p>
  </section>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const sessionId = route.params.sessionId
</script>
