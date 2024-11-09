import type { DefaultTheme } from 'vitepress'

export function sidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '指南',
      items: [
        { text: '简介', link: '/guide/' },

      ],
    },
    {
      text: 'CPU 架构',
      items: [
        { text: 'Arm', link: '/os/arm' },
        { text: 'Amd64', link: '/os/amd64' },
        { text: 'loongArch', link: '/os/amd64' },
        { text: 'mips', link: '/os/mips' },

      ],
    }
  ]
}
