<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import PublicLayout from '@/layouts/PublicLayout.vue'
import AppLayout from '@/layouts/AppLayout.vue'

const route = useRoute()

const layoutComponent = computed(() => {
  const layout = route.meta.layout || 'public'
  return layout === 'app' ? AppLayout : PublicLayout
})
</script>

<template>
  <component :is="layoutComponent">
    <router-view />
  </component>
</template>
