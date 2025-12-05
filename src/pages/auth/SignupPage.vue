<template>
  <section class="auth-page">
    <div class="background" />
    <div class="auth-shell">
      <div class="brand-pane">
        <p class="eyebrow">分钟级启动 · 极速上手</p>
        <h1>创建您的 OpenCap 工作区</h1>
        <p class="lede">
          免费开始体验云端动捕与可视化分析。与团队成员共享项目、快速迭代拍摄方案，让每一次捕捉都
          更高效。
        </p>
        <div class="chips">
          <span v-for="badge in badges" :key="badge" class="chip">{{ badge }}</span>
        </div>
        <div class="steps">
          <div v-for="step in steps" :key="step.title" class="step-card">
            <div class="step-index">{{ step.id }}</div>
            <div>
              <p class="title">{{ step.title }}</p>
              <p class="desc">{{ step.desc }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="form-pane">
        <div class="form-card">
          <div class="form-header">
            <div>
              <p class="eyebrow">注册</p>
              <h2>几步完成团队创建</h2>
              <p class="muted">填写基本信息，立刻开启试用。</p>
            </div>
            <router-link to="/login" class="link subtle">已有账号？登录</router-link>
          </div>

          <form class="form" @submit.prevent="onSubmit">
            <label class="field">
              <span>姓名</span>
              <input v-model="name" type="text" required placeholder="张三" />
            </label>

            <label class="field">
              <span>团队/机构</span>
              <input v-model="team" type="text" placeholder="工作室或公司名称" />
            </label>

            <label class="field">
              <span>邮箱</span>
              <input v-model="email" type="email" required placeholder="you@example.com" />
            </label>

            <div class="two-column">
              <label class="field">
                <div class="field-header">
                  <span>密码</span>
                  <button type="button" class="link" @click="togglePassword">{{ showPassword ? '隐藏' : '显示' }}</button>
                </div>
                <input
                  v-model="password"
                  :type="showPassword ? 'text' : 'password'"
                  required
                  placeholder="至少 8 位字符"
                />
              </label>

              <label class="field">
                <div class="field-header">
                  <span>确认密码</span>
                </div>
                <input
                  v-model="confirmPassword"
                  :type="showPassword ? 'text' : 'password'"
                  required
                  placeholder="再次输入密码"
                />
              </label>
            </div>

            <label class="checkbox">
              <input v-model="accept" type="checkbox" required />
              <span>
                我已阅读并同意
                <a class="link" href="#" @click.prevent>服务条款</a>
                和
                <a class="link" href="#" @click.prevent>隐私政策</a>
              </span>
            </label>

            <button class="primary" type="submit">创建账号</button>

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
                使用 {{ provider.label }} 快速注册
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'

const badges = ['无缝接入', '自动化', '安全合规', '项目协作']
const steps = [
  { id: '01', title: '创建团队', desc: '设定工作区与成员权限，轻松协作。' },
  { id: '02', title: '上传/采集', desc: '支持多设备采集或上传已有素材。' },
  { id: '03', title: '云端处理', desc: 'AI 解算、清洗与可视化无需本地算力。' }
]
const providers = [
  { label: 'Google', icon: '🚀' },
  { label: 'GitHub', icon: '💻' }
]

const name = ref('')
const team = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const accept = ref(false)
const showPassword = ref(false)

const formReady = computed(() => accept.value && password.value && password.value === confirmPassword.value)

const togglePassword = () => {
  showPassword.value = !showPassword.value
}

const onSubmit = async () => {
  if (!formReady.value) {
    console.log('请确认密码一致并勾选协议')
    return
  }
  console.log('注册表单提交', {
    name: name.value,
    team: team.value,
    email: email.value,
    password: password.value
  })
  // 未来可以调用 signup API
}

const onSocial = (provider) => {
  console.log(`使用 ${provider} 注册`)
}
</script>

<style scoped>
.auth-page {
  position: relative;
  min-height: 100vh;
  background: radial-gradient(circle at 15% 20%, rgba(108, 92, 231, 0.12), transparent 35%),
    radial-gradient(circle at 85% 15%, rgba(46, 213, 115, 0.12), transparent 30%),
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
  margin-bottom: 16px;
}

.chip {
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  color: #dfe6ff;
  font-size: 13px;
}

.steps {
  display: grid;
  gap: 12px;
}

.step-card {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 12px;
  padding: 12px 14px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.03);
}

.step-index {
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  background: rgba(138, 164, 255, 0.16);
  font-weight: 700;
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

.two-column {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
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
