import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import './styles/bootstrap.css'

export default {
  extends: DefaultTheme,
} satisfies Theme
