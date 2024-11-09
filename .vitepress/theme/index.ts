import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import {
  NolebaseEnhancedReadabilitiesMenu,
  NolebaseEnhancedReadabilitiesScreenMenu,
} from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import {
  NolebaseInlineLinkPreviewPlugin,
} from '@nolebase/vitepress-plugin-inline-link-preview/client'

import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'
import '@nolebase/vitepress-plugin-inline-link-preview/client/style.css'

import './styles/bootstrap.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-content-after': () => h(NolebaseEnhancedReadabilitiesMenu),
      'nav-screen-content-after': () => h(NolebaseEnhancedReadabilitiesScreenMenu),
    })
  },
  enhanceApp({ app }) {
    app.use(NolebaseInlineLinkPreviewPlugin)
  },
} satisfies Theme
