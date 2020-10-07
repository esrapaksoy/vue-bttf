import { ref, onMounted, watch, computed } from 'vue'
import { cloneDeep } from 'lodash'

export default function(obj) {
  const exports = Object.keys(obj)

  const variables = {}
  const methods = {}
  const computeds = {}

  return function setup(...args) {
    args.forEach((arg, i) => {
      variables[obj.default.props[i]] = arg
    })

    for (let key in obj) {
      // clone data variables
      if (typeof obj[key] != 'function') {
        if (key == 'default') continue
        variables[key] = ref(cloneDeep(obj[key]))
      }
    }

    for (let key in obj) {
      // bind context variables to methods
      if (typeof obj[key] == 'function') {
        methods[key] = obj[key].bind(variables)
      }
    }

    if (obj.default.mounted) {
      onMounted(methods[obj.default.mounted.name])
    }

    if (obj.default.watch) {
      for (let key in obj.default.watch) {
        watch(variables[key], methods[obj.default.watch[key].name])
      }
    }

    if (obj.default.computed) {
      for (let key in obj.default.computed) {
        computeds[key] = computed(methods[key])
      }
    }

    const returns = {}

    for (let key of exports) {
      if (key == 'default') continue

      if (key in variables) returns[key] = variables[key]
      if (key in methods) returns[key] = methods[key]
      if (key in computeds) returns[key] = computeds[key]
    }

    return returns
  }
}
