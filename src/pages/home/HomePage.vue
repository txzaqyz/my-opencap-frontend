<template>
  <div class="home-page">
    <section class="hero">
      <div class="hero-content">
        <p class="eyebrow">Browser-based Motion Capture</p>
        <h1>让你的产品拥有接近 OpenCap 的捕捉体验</h1>
        <p class="subheading">
          使用普通手机与云端推理即可生成高精度 3D 姿态与动力学指标，提供可扩展的研究、运动与康复分析能力。
        </p>
        <div class="cta-group">
          <router-link to="/signup" class="btn btn-primary">免费开始</router-link>
          <router-link to="/features" class="btn btn-ghost">查看功能</router-link>
        </div>
        <ul class="hero-bullets">
          <li>无需穿戴式传感器或动捕室</li>
          <li>云端推理，分钟级完成结果</li>
          <li>输出 3D 骨骼、关节角度、肌肉力曲线等指标</li>
        </ul>
      </div>
      <div class="hero-media">
        <div class="media-card">
          <div class="media-badge">实时预览</div>
          <h3>动作捕捉 Session</h3>
          <p>
            模拟 OpenCap 主站的体验：上传多机位视频、自动校准、生成可交互的 3D
            结果。
          </p>
          <div class="media-preview">
            <div class="skeleton"></div>
            <div class="timeline">
              <span class="dot"></span>
              <span class="dot"></span>
              <span class="dot"></span>
            </div>
            <p class="preview-hint">可替换为嵌入式 Demo 或 3D 组件</p>
          </div>
        </div>
      </div>
    </section>

    <section class="stats">
      <div class="stat-card" v-for="item in stats" :key="item.label">
        <p class="stat-value">{{ item.value }}</p>
        <p class="stat-label">{{ item.label }}</p>
      </div>
    </section>

    <section class="feature-section" id="features">
      <div class="section-header">
        <p class="eyebrow">核心能力</p>
        <h2>覆盖采集、推理与可视化的完整链路</h2>
        <p class="section-desc">
          将 OpenCap 的核心体验模块化，便于替换数据源、部署策略或自定义的可视化组件。
        </p>
      </div>
      <div class="feature-grid">
        <article class="feature-card" v-for="feature in features" :key="feature.title">
          <div class="feature-icon" aria-hidden="true">{{ feature.icon }}</div>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
          <ul class="feature-points">
            <li v-for="point in feature.points" :key="point">{{ point }}</li>
          </ul>
        </article>
      </div>
    </section>

    <section class="workflow">
      <div class="section-header">
        <p class="eyebrow">如何工作</p>
        <h2>三步完成高精度动作捕捉</h2>
        <p class="section-desc">使用常规摄像头即可获得接近 OpenCap 的专业级结果。</p>
      </div>
      <ol class="workflow-steps">
        <li v-for="step in steps" :key="step.title" class="workflow-step">
          <div class="step-number">{{ step.order }}</div>
          <div>
            <h3>{{ step.title }}</h3>
            <p>{{ step.description }}</p>
          </div>
        </li>
      </ol>
    </section>

    <section class="cta">
      <div>
        <h2>准备好体验 OpenCap 风格的捕捉流程了吗？</h2>
        <p>创建项目、邀请合作者，并用云端推理生成可共享的 3D Session。</p>
      </div>
      <div class="cta-actions">
        <router-link to="/signup" class="btn btn-primary">开始试用</router-link>
        <router-link to="/project" class="btn btn-secondary">查看项目示例</router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
const stats = [
  { label: '普通手机同步拍摄', value: '2 - 4 部机位' },
  { label: '分钟级云端推理', value: '\u223c 5 分钟' },
  { label: '输出动力学指标', value: '20+ 曲线' },
  { label: '研究与康复场景', value: '开放扩展 API' }
];

const features = [
  {
    title: '多机位标定与同步',
    description: '对准 OpenCap 主站的标定体验，自动估计内外参并生成稳定的 3D 轨迹。',
    icon: '🎯',
    points: ['二维码或棋盘标定', '自动时间同步', '鲁棒的姿态估计']
  },
  {
    title: '云端推理与动力学',
    description: '利用云端算力在分钟级完成姿态与动力学求解，可按需替换模型。',
    icon: '☁️',
    points: ['批量队列与重试', '可插拔算法管线', '详细的骨骼与关节输出']
  },
  {
    title: '交互式可视化与导出',
    description: '支持 3D 查看、关键帧对比与 CSV/JSON 导出，便于科研或临床复现。',
    icon: '🖥️',
    points: ['WebGL 3D 骨骼', '指标趋势与对比', '可共享链接或嵌入']
  }
];

const steps = [
  {
    order: '01',
    title: '拍摄或上传多视角视频',
    description: '使用手机或摄像机录制 60-120 fps 视频，上传后自动校准与同步。'
  },
  {
    order: '02',
    title: '云端推理生成 3D 姿态',
    description: '几分钟内获得完整骨骼、关节角度与肌肉力曲线，可配置算法版本。'
  },
  {
    order: '03',
    title: '浏览、分析并分享 Session',
    description: '在浏览器中交互查看 3D，下载报告或将 Session 分享给团队成员。'
  }
];
</script>

<style scoped>
:global(body) {
  background: #0b1021;
  color: #e9ecf5;
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.home-page {
  display: flex;
  flex-direction: column;
  gap: 64px;
  padding: 72px min(6vw, 80px) 96px;
  background: radial-gradient(circle at 10% 20%, rgba(88, 130, 255, 0.1), transparent 25%),
    radial-gradient(circle at 80% 0%, rgba(113, 241, 255, 0.08), transparent 22%),
    linear-gradient(180deg, #0b1021, #060812 60%);
  min-height: 100vh;
}

.hero {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 32px;
  align-items: center;
}

.hero-content h1 {
  font-size: clamp(32px, 4vw, 48px);
  line-height: 1.1;
  margin: 8px 0 16px;
}

.subheading {
  color: #c5cbe3;
  font-size: 18px;
  line-height: 1.6;
  max-width: 680px;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #7fd0ff;
  font-size: 12px;
  font-weight: 700;
}

.cta-group {
  display: flex;
  gap: 12px;
  margin: 24px 0 12px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 18px;
  border-radius: 10px;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  border: 1px solid transparent;
}

.btn-primary {
  background: linear-gradient(135deg, #4b9dff, #7df2ff);
  color: #0b1021;
  box-shadow: 0 10px 30px rgba(91, 194, 255, 0.35);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.08);
  color: #e9ecf5;
  border-color: rgba(255, 255, 255, 0.1);
}

.btn-ghost {
  background: rgba(255, 255, 255, 0.05);
  color: #e9ecf5;
  border-color: rgba(255, 255, 255, 0.1);
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.18);
}

.hero-bullets {
  display: grid;
  gap: 8px;
  margin-top: 12px;
  color: #c5cbe3;
  padding-left: 18px;
  list-style: disc;
}

.hero-media {
  display: flex;
  justify-content: flex-end;
}

.media-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 18px;
  padding: 24px;
  max-width: 440px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
}

.media-badge {
  display: inline-block;
  padding: 6px 12px;
  border-radius: 999px;
  background: rgba(125, 242, 255, 0.15);
  color: #7df2ff;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.05em;
}

.media-card h3 {
  margin: 12px 0 6px;
  font-size: 22px;
}

.media-card p {
  color: #c5cbe3;
  line-height: 1.5;
}

.media-preview {
  margin-top: 18px;
  padding: 16px;
  background: linear-gradient(135deg, rgba(125, 242, 255, 0.15), rgba(75, 157, 255, 0.08));
  border-radius: 14px;
  border: 1px dashed rgba(255, 255, 255, 0.2);
}

.skeleton {
  height: 160px;
  border-radius: 12px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0.06));
  background-size: 200% 100%;
  animation: shimmer 2.4s infinite;
}

.timeline {
  display: flex;
  gap: 6px;
  margin: 12px 0 6px;
}

.dot {
  flex: 1;
  height: 6px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.35);
}

.preview-hint {
  color: #9fb3d4;
  font-size: 13px;
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

.stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 16px;
}

.stat-card {
  padding: 16px 18px;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.stat-value {
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
}

.stat-label {
  color: #9fb3d4;
  margin-top: 4px;
}

.feature-section {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.section-header h2 {
  font-size: clamp(26px, 3vw, 36px);
  margin: 6px 0 8px;
}

.section-desc {
  color: #c5cbe3;
  max-width: 760px;
  line-height: 1.6;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
}

.feature-card {
  padding: 20px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.feature-icon {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  background: rgba(255, 255, 255, 0.08);
  margin-bottom: 12px;
  font-size: 20px;
}

.feature-card h3 {
  margin-bottom: 8px;
  font-size: 18px;
}

.feature-card p {
  color: #c5cbe3;
  line-height: 1.5;
}

.feature-points {
  margin-top: 10px;
  display: grid;
  gap: 6px;
  color: #9fb3d4;
  padding-left: 18px;
}

.workflow {
  padding: 8px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.workflow-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 14px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.workflow-step {
  display: flex;
  gap: 12px;
  padding: 18px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
}

.step-number {
  min-width: 42px;
  height: 42px;
  border-radius: 12px;
  background: rgba(125, 242, 255, 0.12);
  color: #7df2ff;
  display: grid;
  place-items: center;
  font-weight: 700;
}

.workflow-step h3 {
  margin: 0 0 6px;
  font-size: 17px;
}

.workflow-step p {
  margin: 0;
  color: #c5cbe3;
}

.cta {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
  padding: 20px 22px;
  border-radius: 14px;
  background: linear-gradient(135deg, rgba(75, 157, 255, 0.2), rgba(125, 242, 255, 0.15));
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.cta h2 {
  margin: 0 0 6px;
}

.cta p {
  margin: 0;
  color: #e0e6f5;
}

.cta-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

@media (max-width: 720px) {
  .home-page {
    padding: 48px 20px 72px;
  }

  .hero {
    grid-template-columns: 1fr;
  }
}
</style>
