<template>
  <section>
    <h1>项目列表</h1>
    <p>展示所有项目，可以点击进入项目详情或创建新项目。</p>
    <!-- 简单示例 -->
    <ul>
      <li v-for="p in projects" :key="p.id">
        <router-link :to="`/projects/${p.id}`">{{ p.name }}</router-link>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
// import { getProjects } from '@/services/projectService'

const projects = ref([
  { id: 'demo-1', name: '演示项目 1' },
  { id: 'demo-2', name: '演示项目 2' }
])

onMounted(async () => {
  // const res = await getProjects()
  // projects.value = res.data
})
</script>
