<template>
  <section>
    <h1>会话列表（Session）</h1>
    <p>显示所有采集/处理过的 Session，可点击查看详情。</p>
    <ul>
      <li v-for="s in sessions" :key="s.id">
        <router-link :to="`/sessions/${s.id}`">{{ s.name }}</router-link>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const sessions = ref([
  { id: 'sess-1', name: '跑步 Session' },
  { id: 'sess-2', name: '下蹲 Session' }
])
</script>
