<template>
  <section class="auth">
    <h1>找回密码</h1>
    <form @submit.prevent="onSubmit">
      <label>
        注册邮箱
        <input v-model="email" type="email" required />
      </label>
      <button type="submit">发送重置链接</button>
    </form>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')

const onSubmit = () => {
  console.log('发送重置密码邮件到', email.value)
}
</script>
