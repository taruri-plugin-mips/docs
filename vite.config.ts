import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  optimizeDeps: {
    exclude: [
      '@nolebase/vitepress-plugin-enhanced-readabilities/client',
      '@nolebase/vitepress-plugin-inline-link-preview/client',
      'vitepress',
      '@nolebase/ui',
    ],
  },
  ssr: {
    noExternal: [
      '@nolebase/vitepress-plugin-enhanced-readabilities',
      '@nolebase/vitepress-plugin-inline-link-preview',
      '@nolebase/ui',
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
