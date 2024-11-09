import { defineConfig } from 'vitepress'
import { sidebar } from './sidebar.js'
import { BiDirectionalLinks } from '@nolebase/markdown-it-bi-directional-links'
import {
  InlineLinkPreviewElementTransform
} from '@nolebase/vitepress-plugin-inline-link-preview/markdown-it'

export default defineConfig({

  ignoreDeadLinks: true,

  lang: 'zh-CN',
  title: 'tauri-plugin-mips',

  srcDir: 'content',

  markdown: {
    config: (md) => {
      md.use(BiDirectionalLinks())
      md.use(InlineLinkPreviewElementTransform)
    },
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
  },
  themeConfig: {
    sidebar: sidebar(),
  },
})
