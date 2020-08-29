import { shallowMount, Wrapper } from '@vue/test-utils'
import App from './App.vue'

it('mounts', () => {
  const view: Wrapper<App> = shallowMount(App, {
    stubs: {
      'router-link': true,
      'router-view': true,
    },
  })

  expect(view.html()).toBeDefined()
})
