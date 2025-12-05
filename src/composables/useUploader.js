import { ref } from 'vue'

export function useUploader(uploadFn) {
  const progress = ref(0)
  const uploading = ref(false)
  const error = ref(null)

  const upload = async (file) => {
    uploading.value = true
    error.value = null
    progress.value = 0
    try {
      const res = await uploadFn(file, (p) => {
        progress.value = p
      })
      return res
    } catch (err) {
      error.value = err
      throw err
    } finally {
      uploading.value = false
    }
  }

  return {
    progress,
    uploading,
    error,
    upload
  }
}
