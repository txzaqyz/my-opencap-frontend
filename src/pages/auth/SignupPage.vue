<template>
  <section class="auth">
    <h1>注册</h1>
    <form @submit.prevent="onSubmit">
      <label>
        邮箱
        <input v-model="email" type="email" required />
      </label>
      <label>
        密码
        <input v-model="password" type="password" required />
      </label>
      <button type="submit">注册</button>
    </form>
    <p>
      已有账号？
      <router-link to="/login">登录</router-link>
    </p>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')

const onSubmit = async () => {
  console.log('注册表单提交', email.value, password.value)
  // 未来可以调用 signup API
}
</script>
