<template>
  <section class="auth">
    <h1>登录</h1>
    <form @submit.prevent="onSubmit">
      <label>
        邮箱
        <input v-model="email" type="email" required />
      </label>
      <label>
        密码
        <input v-model="password" type="password" required />
      </label>
      <button type="submit">登录</button>
    </form>
    <p>
      没有账号？
      <router-link to="/signup">注册</router-link>
    </p>
  </section>
</template>

<script setup>
import { ref } from 'vue'
// import { login } from '@/services/authService'

const email = ref('')
const password = ref('')

const onSubmit = async () => {
  console.log('登录表单提交', email.value, password.value)
  // 这里未来可以调用 login API，再把 token 存到 pinia
}
</script>
