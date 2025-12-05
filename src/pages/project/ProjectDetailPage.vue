<template>
  <section>
    <h1>项目详情：{{ projectId }}</h1>
    <p>这里可以显示项目的描述、统计信息，以及该项目下的 Session 列表。</p>
  </section>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const projectId = route.params.projectId
</script>
