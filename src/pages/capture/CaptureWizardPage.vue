<template>
  <section>
    <h1>采集 / 上传向导</h1>
    <p>步骤示意：</p>
    <ol>
      <li>上传视频或采集数据</li>
      <li>选择模型和参数</li>
      <li>提交任务并等待处理</li>
    </ol>

    <input type="file" @change="onFileChange" />
    <button :disabled="!file" @click="onUpload">上传并开始处理</button>

    <p v-if="uploading">上传中...</p>
    <p v-if="taskId">任务已创建，任务 ID：{{ taskId }}</p>
  </section>
</template>

<script setup>
import { ref } from 'vue'
// import { uploadVideo, startProcessing } from '@/services/captureService'

const file = ref(null)
const uploading = ref(false)
const taskId = ref('')

const onFileChange = (event) => {
  file.value = event.target.files[0]
}

const onUpload = async () => {
  if (!file.value) return
  uploading.value = true
  console.log('模拟上传文件：', file.value.name)
  // 真正项目中在这里调用 uploadVideo 和 startProcessing
  setTimeout(() => {
    uploading.value = false
    taskId.value = 'task-demo-123'
  }, 1000)
}
</script>
