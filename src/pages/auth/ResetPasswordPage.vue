<template>
  <section class="auth reset-page">
    <div class="hero">
      <p class="eyebrow">账号安全</p>
      <h1>找回密码</h1>
      <p class="subtitle">输入注册邮箱，我们会发送一封包含重置链接的邮件。</p>
    </div>

    <div class="card">
      <div class="card__header">
        <div class="badge">📩</div>
        <div>
          <p class="label">重置邮箱</p>
          <p class="hint">请确保邮箱可正常接收邮件</p>
        </div>
      </div>

      <form class="card__form" @submit.prevent="onSubmit">
        <label class="field">
          <span>注册邮箱</span>
          <input v-model.trim="email" type="email" placeholder="you@example.com" required />
        </label>

        <button class="btn-primary" type="submit" :disabled="isSending">
          {{ isSending ? '发送中…' : '发送重置链接' }}
        </button>

        <p v-if="sent" class="success">链接已发送，请查收邮箱。</p>
      </form>

      <div class="card__footer">
        <router-link to="/login">返回登录</router-link>
        <router-link to="/signup">创建新账号</router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const isSending = ref(false)
const sent = ref(false)

const onSubmit = () => {
  if (!email.value) return
  isSending.value = true
  sent.value = false

  setTimeout(() => {
    isSending.value = false
    sent.value = true
    console.log('发送重置密码邮件到', email.value)
  }, 700)
}
</script>

<style scoped>
.reset-page {
  max-width: 520px;
  margin: 60px auto 100px;
}

.hero {
  margin-bottom: 20px;
}

.eyebrow {
  display: inline-block;
  padding: 6px 12px;
  background: var(--color-primary-soft);
  border-radius: 999px;
  color: var(--color-primary);
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

h1 {
  margin-top: 10px;
  font-size: 32px;
}

.subtitle {
  margin-top: 8px;
  color: var(--color-text-muted);
}

.card {
  margin-top: 16px;
  padding: 20px;
  border-radius: 16px;
  border: 1px solid var(--color-border);
  background: linear-gradient(145deg, #0d1023 0%, #0b1229 50%, #0c1227 100%);
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.35);
}

.card__header {
  display: flex;
  align-items: center;
  gap: 12px;
}

.badge {
  width: 44px;
  height: 44px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: rgba(79, 70, 229, 0.12);
  font-size: 20px;
}

.label {
  font-weight: 600;
}

.hint {
  font-size: 12px;
  color: var(--color-text-muted);
}

.card__form {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin: 18px 0 6px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 14px;
  color: var(--color-text-muted);
}

input {
  width: 100%;
  padding: 12px;
  border-radius: 10px;
  border: 1px solid var(--color-border);
  background: rgba(255, 255, 255, 0.02);
  color: var(--color-text);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

input:focus {
  outline: none;
  border-color: rgba(79, 70, 229, 0.6);
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.2);
}

button {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 10px;
  background: var(--color-primary);
  color: #fff;
  font-weight: 600;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

button:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 12px 30px rgba(79, 70, 229, 0.35);
}

button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.success {
  color: #4ade80;
  font-size: 13px;
}

.card__footer {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: var(--color-text-muted);
}

.card__footer a {
  color: #cbd5ff;
}
</style>
