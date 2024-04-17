import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import { mode, platform } from './env.js'

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
  console.log('------------------')
  console.log(mode)
  console.log(platform)
  console.log('------------------')
  const plugins = basePlugins
  return plugins
}
