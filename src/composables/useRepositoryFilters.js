import { ref, watch } from 'vue'

export default function useRepositoryFilters(repositoriesMatchingSearchQuery) {
  const filters = ref([])
  const filteredRepositories = ref([])

  const updateFilters = async () => {
    filteredRepositories.value = [...repositoriesMatchingSearchQuery, 1, 2, 3]
  }

  watch(repositoriesMatchingSearchQuery, updateFilters)

  return { filters, updateFilters, filteredRepositories }
}
