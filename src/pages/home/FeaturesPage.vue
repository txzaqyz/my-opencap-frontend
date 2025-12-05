<template>
  <section class="page">
    <div class="section-header">
      <p class="eyebrow">核心功能</p>
      <h1>让运动捕捉更清晰、更高效</h1>
      <p class="subtitle">从上传到分析，全流程自动化，帮助你快速获得可执行的运动洞察。</p>
    </div>

    <div class="grid">
      <article v-for="feature in features" :key="feature.title" class="card">
        <div class="icon">{{ feature.icon }}</div>
        <h3>{{ feature.title }}</h3>
        <p>{{ feature.description }}</p>
        <ul>
          <li v-for="point in feature.points" :key="point">{{ point }}</li>
        </ul>
      </article>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    icon: '🎥',
    title: '视频到骨架只需几步',
    description: '上传多视角视频，自动完成同步、关键点检测与三角化重建。',
    points: ['自动筛选优质帧', '支持多设备同步与校准', '云端加速推理']
  },
  {
    icon: '🦾',
    title: '3D 骨骼与力学可视化',
    description: '实时交互查看骨骼、关节角度、肌肉力曲线，支持逐帧导出。',
    points: ['高对比夜空配色', '多种视角与对齐方式', '导出动画和关键指标']
  },
  {
    icon: '📊',
    title: '数据洞察与报告',
    description: '为教练、康复和科研提供清晰指标，自动生成可分享的报告。',
    points: ['常见动作模板与对比', '峰值/区间指标提取', '一键生成分享链接']
  }
]
</script>

<style scoped>
.page {
  max-width: 1100px;
  margin: 60px auto 100px;
  padding: 0 12px;
}

.section-header {
  text-align: center;
  margin-bottom: 32px;
}

.eyebrow {
  display: inline-block;
  padding: 6px 12px;
  background: var(--color-primary-soft);
  color: var(--color-primary);
  border-radius: 999px;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

h1 {
  margin-top: 12px;
  font-size: 34px;
}

.subtitle {
  margin-top: 10px;
  color: var(--color-text-muted);
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 18px;
}

.card {
  padding: 20px;
  border-radius: 16px;
  border: 1px solid var(--color-border);
  background: radial-gradient(circle at 20% 20%, rgba(79, 70, 229, 0.12), transparent 30%),
    #0b1020;
  transition: border-color 0.2s ease, transform 0.2s ease;
}

.card:hover {
  border-color: rgba(79, 70, 229, 0.5);
  transform: translateY(-3px);
}

.icon {
  width: 46px;
  height: 46px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: rgba(79, 70, 229, 0.15);
  font-size: 22px;
  margin-bottom: 10px;
}

h3 {
  margin-bottom: 8px;
  font-size: 18px;
}

p {
  color: var(--color-text-muted);
  line-height: 1.6;
}

ul {
  margin-top: 12px;
  padding-left: 16px;
  color: var(--color-text);
  display: grid;
  gap: 6px;
}

li {
  position: relative;
  padding-left: 14px;
  color: var(--color-text);
}

li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--color-primary);
}
</style>
