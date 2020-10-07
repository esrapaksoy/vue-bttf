import { onMounted, ref, watch } from 'vue'

export default function useRepositoryFilters(repositoriesMatchingSearchQuery) {
  const filters = ref([])
  const filteredRepositories = ref([])

  const updateFilters = async () => {
    filteredRepositories.value = [
      ...repositoriesMatchingSearchQuery.value,
      { name: `filtered ${Math.random()}` },
      { name: `filtered ${Math.random()}` },
      { name: `filtered ${Math.random()}` }
    ]
  }

  watch(repositoriesMatchingSearchQuery, updateFilters)
  onMounted(updateFilters)

  return { filters, updateFilters, filteredRepositories }
}
