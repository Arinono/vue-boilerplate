const files = require.context('.', true, /^[-./\w]+(?<!\.spec|\.\/index)\.ts$/)
/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
const modules: any = {}

files.keys().forEach((key: string) => {
  if (key.indexOf('types.ts') > -1) return
  const matches = key.match(/\/([\w-]+)(\/|\.){1}/)
  if (matches) {
    modules[matches[1]] = files(key).default
  }
})

export default modules
