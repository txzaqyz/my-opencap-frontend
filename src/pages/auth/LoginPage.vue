<template>
  <section class="auth-page">
    <div class="background" />
    <div class="auth-shell">
      <div class="brand-pane">
        <p class="eyebrow">实时运动捕捉 · 云端驱动</p>
        <h1>欢迎回到 OpenCap</h1>
        <p class="lede">
          登录以继续管理拍摄、查看处理进度，并探索更多动作分析工具。我们为团队提供全流程的
          3D 动捕支持，让灵感与数据同时抵达。
        </p>
        <div class="chips">
          <span v-for="chip in chips" :key="chip" class="chip">{{ chip }}</span>
        </div>
        <ul class="highlights">
          <li v-for="item in highlights" :key="item.title" class="highlight-card">
            <div class="icon">{{ item.icon }}</div>
            <div>
              <p class="title">{{ item.title }}</p>
              <p class="desc">{{ item.desc }}</p>
            </div>
          </li>
        </ul>
      </div>

      <div class="form-pane">
        <div class="form-card">
          <div class="form-header">
            <div>
              <p class="eyebrow">账号登录</p>
              <h2>解锁您的工作区</h2>
              <p class="muted">使用注册邮箱登录，继续管理拍摄与项目。</p>
            </div>
            <router-link to="/signup" class="link subtle">注册新账号</router-link>
          </div>

          <form class="form" @submit.prevent="onSubmit">
            <label class="field">
              <span>邮箱</span>
              <input v-model="email" type="email" required placeholder="you@example.com" />
            </label>

            <label class="field">
              <div class="field-header">
                <span>密码</span>
                <button type="button" class="link" @click="toggleVisibility">
                  {{ showPassword ? '隐藏' : '显示' }}
                </button>
              </div>
              <input
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                required
                placeholder="至少 8 位字符"
              />
            </label>

            <div class="field-row">
              <label class="checkbox">
                <input v-model="rememberMe" type="checkbox" />
                <span>保持登录</span>
              </label>
              <router-link to="/reset-password" class="link subtle">忘记密码？</router-link>
            </div>

            <button class="primary" type="submit">登录</button>

            <div class="divider"><span>或</span></div>
            <div class="social-row">
              <button
                v-for="provider in providers"
                :key="provider.label"
                type="button"
                class="ghost"
                @click="onSocial(provider.label)"
              >
                <span>{{ provider.icon }}</span>
                {{ provider.label }} 登录
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const chips = ['高精度', '云端处理', '跨平台', '团队协作']
const highlights = [
  { icon: '📡', title: '实时同步', desc: '在拍摄现场即可预览关键帧与深度。' },
  { icon: '🧠', title: 'AI 自动清洗', desc: '骨骼解算、噪声处理一站式完成。' },
  { icon: '📊', title: '数据洞察', desc: '关键指标与动作分析图表实时更新。' }
]
const providers = [
  { label: 'Google', icon: '🔒' },
  { label: 'GitHub', icon: '💻' }
]

const email = ref('')
const password = ref('')
const rememberMe = ref(true)
const showPassword = ref(false)

const toggleVisibility = () => {
  showPassword.value = !showPassword.value
}

const onSubmit = async () => {
  console.log('登录表单提交', { email: email.value, password: password.value, remember: rememberMe.value })
  // 这里未来可以调用 login API，再把 token 存到 pinia
}

const onSocial = (provider) => {
  console.log(`使用 ${provider} 登录`)
}
</script>

<style scoped>
.auth-page {
  position: relative;
  min-height: 100vh;
  background: radial-gradient(circle at 20% 20%, rgba(108, 92, 231, 0.12), transparent 35%),
    radial-gradient(circle at 80% 10%, rgba(46, 213, 115, 0.12), transparent 25%),
    linear-gradient(135deg, #0f1629 0%, #0b1020 100%);
  color: #e8ecf5;
  overflow: hidden;
  padding: 64px 24px;
}

.background {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 80px 80px, 80px 80px;
  opacity: 0.25;
}

.auth-shell {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
}

.brand-pane {
  padding: 32px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.02));
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.45);
}

.form-pane {
  display: flex;
  align-items: center;
}

.form-card {
  width: 100%;
  padding: 28px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  background: rgba(12, 18, 36, 0.9);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(12px);
}

.eyebrow {
  color: #8aa4ff;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 12px;
  margin-bottom: 8px;
}

h1 {
  font-size: 36px;
  margin: 0 0 12px;
}

h2 {
  font-size: 28px;
  margin: 0 0 8px;
}

.lede {
  color: #b8c4de;
  line-height: 1.7;
  margin-bottom: 20px;
}

.chips {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.chip {
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  color: #dfe6ff;
  font-size: 13px;
}

.highlights {
  display: grid;
  gap: 12px;
  padding: 0;
  margin: 0;
  list-style: none;
}

.highlight-card {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 12px;
  padding: 12px 14px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.03);
}

.icon {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: rgba(138, 164, 255, 0.14);
}

.title {
  font-weight: 600;
  margin: 0 0 4px;
}

.desc {
  margin: 0;
  color: #b8c4de;
  line-height: 1.6;
}

.form-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 16px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-weight: 600;
}

.field span {
  color: #dfe6ff;
}

.field-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

input[type='email'],
input[type='password'],
input[type='text'] {
  width: 100%;
  padding: 12px 14px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.04);
  color: #e8ecf5;
  outline: none;
  transition: border 0.2s ease, box-shadow 0.2s ease;
}

input:focus {
  border-color: #8aa4ff;
  box-shadow: 0 0 0 3px rgba(138, 164, 255, 0.25);
}

.field-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.checkbox {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #dfe6ff;
  font-weight: 500;
}

.checkbox input {
  width: 16px;
  height: 16px;
}

.primary {
  width: 100%;
  padding: 12px 16px;
  border-radius: 12px;
  border: none;
  background: linear-gradient(90deg, #8aa4ff, #46d6a4);
  color: #0b1020;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.12s ease, box-shadow 0.2s ease;
}

.primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 10px 30px rgba(70, 214, 164, 0.3);
}

.divider {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #9db1d3;
  font-size: 14px;
}

.divider::before,
.divider::after {
  content: '';
  height: 1px;
  flex: 1;
  background: rgba(255, 255, 255, 0.12);
}

.social-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 10px;
}

.ghost {
  width: 100%;
  padding: 10px 12px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.03);
  color: #e8ecf5;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  cursor: pointer;
  transition: border 0.2s ease, transform 0.12s ease;
}

.ghost:hover {
  border-color: rgba(138, 164, 255, 0.8);
  transform: translateY(-1px);
}

.link {
  color: #8aa4ff;
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;
}

.link.subtle {
  color: #9db1d3;
}

.link.subtle:hover,
.link:hover {
  color: #c3d2ff;
}

.muted {
  margin: 0;
  color: #9db1d3;
}

@media (max-width: 768px) {
  .auth-page {
    padding: 32px 16px 48px;
  }

  .form-card {
    padding: 22px;
  }
}
</style>
