import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  optimizeDeps: {
    exclude: [
      'vitepress',
    ],
  },
  plugins: [
    Components({
      include: [/\.vue/, /\.md/],
      dirs: [
        'src/components',
      ],
      dts: 'components.d.ts',
    }),
    AutoImport({
      dirs: [
        'src/composables',
      ],
      imports: [
        'vue',
        'vitepress',
      ],
      dts: 'auto-imports.d.ts',
    }),
  ],
})
