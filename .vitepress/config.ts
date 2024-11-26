import { remove } from 'diacritics'
import { defineConfig } from 'vitepress'
import { sidebar } from './sidebar.js'

export default defineConfig({

  ignoreDeadLinks: true,

  lang: 'zh-CN',
  title: 'tauri-plugin-mips',

  srcDir: 'content',
  outDir: './dist',

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.png' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
  ],

  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
  },

  themeConfig: {
    outline: {
      level: 'deep',
    },
    logo: '/logo.png',
    sidebar: sidebar(),
    search: {
      provider: 'local',
    },
  },
})

// eslint-disable-next-line no-control-regex
const rControl = /[\u0000-\u001F]/g
const rSpecial = /[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'<>,.?/]+/g

export function slugify(str: string): string {
  return (
    remove(str)
      // Remove control characters
      .replace(rControl, '')
      // Replace special characters
      .replace(rSpecial, '-')
      // Remove continuos separators
      .replace(/-{2,}/g, '-')
      // Remove prefixing and trailing separtors
      .replace(/^-+|-+$/g, '')
      // ensure it doesn't start with a number (#121)
      .replace(/^(\d)/, '_$1')
      // lowercase
      .toLowerCase()
  )
}
