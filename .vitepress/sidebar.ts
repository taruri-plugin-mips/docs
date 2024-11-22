import type { DefaultTheme } from 'vitepress'

export function sidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '指南',
      items: [
        { text: '简介', link: '/guide/' },
        { text: '主要功能', link: '/guide/features' },
        { text: '快速起步', link: '/guide/getting-started' },
      ],
    },
    {
      text: 'CPU 架构',
      items: [
        { text: 'Arm', link: '/os/arm' },
        { text: 'Amd64', link: '/os/amd64' },
        { text: 'LoongArch', link: '/os/loong-arch' },
        { text: 'MIPS', link: '/os/mips' },
        { text: '高级功能', link: '/os/advanced' },
      ],
    },
  ]
}
