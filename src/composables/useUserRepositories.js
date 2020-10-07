import { ref, onMounted, watch } from 'vue'

export default function useUserRepositories(user) {
  const repositories = ref([])

  const getUserRepositories = async () => {
    repositories.value = [{ name: user.value }, { name: 'fixed' }, { name: `random ${Math.random()}` }]
  }

  onMounted(getUserRepositories)
  watch(user, getUserRepositories)

  return {
    repositories,
    getUserRepositories
  }
}
