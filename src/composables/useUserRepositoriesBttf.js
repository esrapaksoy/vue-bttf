export const repositories = []

export async function getUserRepositories() {
  this.repositories.value = [{ name: this.user.value }, { name: 'fixed' }, { name: `random ${Math.random()}` }]
}

export default {
  props: ['user'],
  mounted: getUserRepositories,
  watch: {
    user: getUserRepositories
  }
}
