import type { Alpine } from 'alpinejs'
import intersect from '@alpinejs/intersect'

type AlpineStore = {
  name: string
  store: () => object
}

type AlpineComponent = {
  name: string
  component: () => object
}

export default (Alpine: Alpine) => {
  Alpine.plugin(intersect)

  const alpineStores = import.meta.glob('./stores/*.js', { eager: true, import: 'default' }) as Record<string, AlpineStore>

  for (const path in alpineStores) {
    const store = alpineStores[path]

    const name = store.name

    Alpine.store(name, store.store())
  }

  // Alpine components
  const alpineComponents = import.meta.glob('./components/*.js', { eager: true, import: 'default' }) as Record<string, AlpineComponent>

  for (const path in alpineComponents) {
    const component = alpineComponents[path]

    const name = component.name

    Alpine.data(name, component.component)
  }
}