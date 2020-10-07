import { ref, onMounted, watch } from 'vue'

export default function useUserRepositories(user) {
  const repositories = ref([])

  const getUserRepositories = async () => {
    repositories.value = [user.value, ' done']
  }

  onMounted(getUserRepositories)
  watch(user, getUserRepositories)

  return {
    repositories,
    getUserRepositories
  }
}

// export const repositories = ref([])

// export async function getUserRepositories() {
//   this.repositories.value = [this.user.value, 'done']
// }

// export default {
//   props: ['user'],
//   mounted: getUserRepositories,
//   watch: {
//     user: getUserRepositories
//   }
// }

// const obj = {
//   repositories: ref([]),
//   async getUserRepositories() {
//     this.repositories.value = [this.user.value, 'done']
//   },
//   default: {
//     props: ['user'],
//     mounted: getUserRepositories,
//     watch: {
//       user: getUserRepositories
//     }
//   }
// }

// export default function() {
//   // init data variables
//   const exports = Object.keys(obj) // [repositories, getUserRepositories, default]

//   const variables = {}

//   return function setup(...args) {
//     // args = [user]
//     args.forEach((arg, i) => {
//       variables[obj.default.props[i]] = arg
//     })

//     for (let key in obj) { // clone data variables
//       if (typeof obj[key] != 'function') {
//         // check if obj[key] is data
//         variables[key] = ref(obj[key].value.clone())
//       }
//     }

//     for (let key in obj) { // bind context variables to methods
//       if (typeof obj[key] == 'function') {
//         obj[key] = obj[key].bind(variables)
//       }
//     }

//     if (obj.default.mounted) {
//       onMounted(obj.default.mounted)
//     }

//     if (obj.default.watch) {
//       for (let key in obj.default.watch) {
//         watch(key, obj.default.watch[key])
//       }
//     }

//     const returns = {}

//     for (let key in exports) {
//       if (key in variables) returns[key] = variables[key]
//       if (key in obj) returns[key] = obj[key]
//     }

//     return returns
//   }
// }
