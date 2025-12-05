<template>
  <section class="page">
    <div class="section-header">
      <p class="eyebrow">定价方案</p>
      <h1>按需选择，快速启动</h1>
      <p class="subtitle">覆盖个人练习到团队协作的不同需求，随时升级不受锁定。</p>
    </div>

    <div class="pricing-grid">
      <article v-for="plan in plans" :key="plan.name" :class="['card', { highlight: plan.popular }]">
        <div class="card__top">
          <div class="tag" v-if="plan.popular">最受欢迎</div>
          <h3>{{ plan.name }}</h3>
          <p class="price">{{ plan.price }}</p>
          <p class="desc">{{ plan.description }}</p>
        </div>

        <ul class="features">
          <li v-for="item in plan.features" :key="item">{{ item }}</li>
        </ul>

        <button class="btn-primary" type="button">{{ plan.cta }}</button>
      </article>
    </div>
  </section>
</template>

<script setup>
const plans = [
  {
    name: '个人免费版',
    price: '￥0 / 月',
    description: '入门体验，适合个人练习与尝试。',
    features: ['单项目存储', '上传时长 3 分钟', '基础骨骼与角度查看'],
    cta: '立即体验'
  },
  {
    name: '专业版',
    price: '￥129 / 月',
    description: '更高精度与可视化，适合教练与高阶用户。',
    features: ['多项目与 Session 管理', '更高帧率与长视频上传', '导出报告与分享链接'],
    cta: '开始专业之旅',
    popular: true
  },
  {
    name: '团队版',
    price: '￥259 / 月/人',
    description: '团队协作与权限管理，适合科研或俱乐部。',
    features: ['团队空间与成员权限', '模板化指标库', '团队数据加密备份'],
    cta: '联系销售'
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

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 18px;
}

.card {
  padding: 20px;
  border-radius: 16px;
  border: 1px solid var(--color-border);
  background: #0b1020;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  border-color: rgba(79, 70, 229, 0.5);
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
}

.card.highlight {
  border-color: var(--color-primary);
  box-shadow: 0 15px 40px rgba(79, 70, 229, 0.3);
}

.card__top {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.tag {
  align-self: flex-start;
  padding: 4px 10px;
  background: rgba(79, 70, 229, 0.2);
  color: var(--color-primary);
  border-radius: 999px;
  font-size: 12px;
  letter-spacing: 0.04em;
}

h3 {
  font-size: 18px;
}

.price {
  font-size: 26px;
  font-weight: 700;
}

.desc {
  color: var(--color-text-muted);
}

.features {
  display: grid;
  gap: 8px;
  color: var(--color-text);
  padding-left: 14px;
}

.features li {
  position: relative;
  padding-left: 12px;
}

.features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--color-primary);
}

button {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 12px;
  background: var(--color-primary);
  color: #fff;
  font-weight: 600;
  margin-top: auto;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

button:hover {
  transform: translateY(-1px);
  box-shadow: 0 12px 30px rgba(79, 70, 229, 0.35);
}
</style>
