import { ref, computed } from 'vue'

export function usePagination(initialPage = 1, initialPageSize = 10) {
  const page = ref(initialPage)
  const pageSize = ref(initialPageSize)
  const total = ref(0)

  const totalPages = computed(() =>
    pageSize.value === 0 ? 0 : Math.ceil(total.value / pageSize.value)
  )

  const setPage = (p) => {
    page.value = p
  }

  const setPageSize = (size) => {
    pageSize.value = size
  }

  const setTotal = (t) => {
    total.value = t
  }

  return {
    page,
    pageSize,
    total,
    totalPages,
    setPage,
    setPageSize,
    setTotal
  }
}
