export const filters = []
export const filteredRepositories = []

export async function updateFilters() {
  this.filteredRepositories.value = [
    ...this.repositoriesMatchingSearchQuery.value,
    { name: `filtered ${Math.random()}` },
    { name: `filtered ${Math.random()}` },
    { name: `filtered ${Math.random()}` }
  ]
}

export default {
  props: ['repositoriesMatchingSearchQuery'],
  mounted: updateFilters,
  watch: {
    repositoriesMatchingSearchQuery: updateFilters
  }
}
