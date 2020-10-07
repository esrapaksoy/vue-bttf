<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Repositories</h2>
    <p v-for="repository in repositories" :key="repository.name">{{ repository.name }}</p>
  </div>
</template>

<script>
import { toRefs } from 'vue'
import bttf from '@/lib/bttf'

// import useUserRepositories from '@/composables/useUserRepositories'
import * as useUserRepositoriesBttf from '@/composables/useUserRepositoriesBttf'

// import useRepositoryNameSearch from '@/composables/useRepositoryNameSearch'
import * as useRepositoryNameSearchBttf from '@/composables/useRepositoryNameSearchBttf'

// import useRepositoryFilters from '@/composables/useRepositoryFilters'
import * as useRepositoryFiltersBttf from '@/composables/useRepositoryFiltersBttf'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup(props) {
    const { msg } = toRefs(props)

    const { repositories, getUserRepositories } = bttf(useUserRepositoriesBttf)(msg)

    const { searchQuery, repositoriesMatchingSearchQuery } = bttf(useRepositoryNameSearchBttf)(repositories)

    setTimeout(() => (searchQuery.value = 'fixed'), 3000)

    const { filters, updateFilters, filteredRepositories } = bttf(useRepositoryFiltersBttf)(
      repositoriesMatchingSearchQuery
    )

    return {
      // Since we don’t really care about the unfiltered repositories
      // we can expose the end results under the `repositories` name
      repositories: filteredRepositories,
      getUserRepositories,
      searchQuery,
      filters,
      updateFilters
    }
  }
}
</script>

<style scoped lang="scss"></style>
