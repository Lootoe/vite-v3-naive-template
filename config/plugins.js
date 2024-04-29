import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

const basePlugins = [
  vue(),
  AutoImport({
    imports: ['vue', 'vue-router', 'pinia', '@vueuse/core'],
    eslintrc: {
      enabled: true,
      filepath: './.eslintrc-auto-import.json',
      globalsPropValue: true,
    },
    resolvers: NaiveUiResolver(),
  }),
  Components({
    resolvers: NaiveUiResolver(),
  }),
]

export const getPlugins = () => {
  const plugins = basePlugins
  return plugins
}
