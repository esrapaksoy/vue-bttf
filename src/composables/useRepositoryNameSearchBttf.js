export const searchQuery = ''

export function repositoriesMatchingSearchQuery() {
  return this.repositories.value.filter(repository => {
    return repository.name.includes(this.searchQuery.value)
  })
}

export default {
  props: ['repositories'],
  computed: { repositoriesMatchingSearchQuery }
}
