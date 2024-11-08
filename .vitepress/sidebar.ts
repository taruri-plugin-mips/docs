import type { DefaultTheme } from 'vitepress'

export function sidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '指南',
      items: [
        { text: '简介', link: '/guide/' },

      ],
    }
  ]
}
