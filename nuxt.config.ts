// https://nuxt.com/docs/api/configuration/nuxt-config
import yaml from "@rollup/plugin-yaml";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4 // 🌟 Nuxt 4 の挙動と app/ 構造を完全有効化する設定
  },
  ssr: true,
  app: {
    head: {
	meta: [
        {charset: 'utf-8'},
      ],
      link: [
        // 1. Google Fonts のサーバーと事前に握手（Preconnect）して接続時間をゼロにする
        { rel: 'preconnect', href: 'https://googleapis.com' },
        { rel: 'preconnect', href: 'https://gstatic.com', crossorigin: '' },
        { rel: 'preconnect', href: 'https://cloudflare.com' },
        { rel: 'preconnect', href: 'https://use.fontawesome.com' },
        // 2. いつもの Google Fonts のスタイルシート URL
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=M+PLUS+2:wght@400&display=swap' },
        {rel: 'icon', type: 'image/png', href: '/favicon.png'},
        {rel: 'apple-touch-icon', type: 'image/png', href: '/favicon.png'},
        {rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v6.2.0/css/all.css'},
      ]
    }
  },
  vite: {
	plugins: [
		yaml(),
	],
  },
})
