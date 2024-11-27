import type { DefaultTheme } from 'vitepress'

export function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: '指南',
      activeMatch: '^/guide/',
      link: '/guide/getting-started',
    },
    {
      text: '其他内容',
      link: '/other/make',
      activeMatch: '^/other/',
    },
    {
      text: 'FAQ',
      link: '/faq',
      activeMatch: '^/faq/',
    },
    {
      text: 'CPU 架构',
      activeMatch: '^/os/',
      items: [
        { text: 'ARM', link: '/os/arm' },
        { text: 'AMD64', link: '/os/amd64' },
        { text: 'LoongArch', link: '/os/loong-arch' },
        { text: 'MIPS', link: '/os/mips' },
        { text: '高级功能', link: '/os/advanced' },
      ],
    },
  ]
}
