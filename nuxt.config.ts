export default defineNuxtConfig({
  extends: ['docus'],
  app: { baseURL: process.env.NUXT_APP_BASE_URL || '/', head: { htmlAttrs: { lang: 'zh-CN' }, link: [{ rel: 'icon', href: `${process.env.NUXT_APP_BASE_URL || '/'}favicon.svg` }], meta: [{ name: 'robots', content: 'noindex' }] } },
  css: ['~/assets/css/legal.css'],
  colorMode: { preference: 'dark', fallback: 'dark' },
  ui: { fonts: false },
  fonts: { families: [] },
  robots: { robotsTxt: false },
  ogImage: { enabled: false },
  mcp: { enabled: false },
  llms: { enabled: false },
  sitemap: { enabled: false },
  devtools: { enabled: false },
  nitro: { prerender: { routes: ['/', '/privacy', '/terms'], failOnError: true } }
})
