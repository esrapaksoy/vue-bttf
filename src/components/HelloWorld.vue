<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import { toRefs } from 'vue'
import useUserRepositories from '@/composables/useUserRepositories'
import useRepositoryNameSearch from '@/composables/useRepositoryNameSearch'
import useRepositoryFilters from '@/composables/useRepositoryFilters'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup(props) {
    console.log(props.msg)
    const { msg } = toRefs(props)

    const { repositories, getUserRepositories } = useUserRepositories(msg)

    const { searchQuery, repositoriesMatchingSearchQuery } = useRepositoryNameSearch(repositories)

    const { filters, updateFilters, filteredRepositories } = useRepositoryFilters(repositoriesMatchingSearchQuery)

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
