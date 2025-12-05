<template>
  <section>
    <h1>采集结果：{{ taskId }}</h1>
    <p>这里展示该任务生成的 Session 链接、结果摘要等。</p>
  </section>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const taskId = route.params.taskId
</script>
