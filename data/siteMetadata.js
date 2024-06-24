/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Init Cloud',
  author: 'Init Cloud Corp.',
  headerTitle: 'Init Cloud',
  description: '이닛클라우드 블로그',
  language: 'ko',
  theme: 'system', // system, dark or light
  siteUrl: 'https://www.initcloud.io',
  siteRepo: 'https://github.com/InitCloud-Co/initcloud-blog',
  siteLogo: '/static/images/logo.svg',
  socialBanner: '/static/images/twitter-card.png',
  email: 'contact@initcloud.io',
  github: 'https://github.com/InitCloud-Co',
  linkedin: 'https://www.linkedin.com/company/init-cloud',
  locale: 'ko-KR',
  analytics: {
    googleAnalytics: {
      googleAnalyticsId: process.env.NEXT_PUBLIC_GTAG, // e.g. G-XXXXXXX
    },
  },
  // comments: {
  //   provider: 'giscus', // supported providers: giscus, utterances, disqus
  //   giscusConfig: {
  //     repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
  //     repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
  //     category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
  //     categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
  //     mapping: 'pathname', // supported options: pathname, url, title
  //     reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
  //     // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
  //     metadata: '0',
  //     // theme example: light, dark, dark_dimmed, dark_high_contrast
  //     // transparent_dark, preferred_color_scheme, custom
  //     theme: 'light',
  //     // theme when dark mode
  //     darkTheme: 'transparent_dark',
  //     // If the theme option above is set to 'custom`
  //     // please provide a link below to your custom theme css file.
  //     // example: https://giscus.app/themes/custom_example.css
  //     themeURL: '',
  //     // This corresponds to the `data-lang="en"` in giscus's configurations
  //     lang: 'ko',
  //   },
  // },
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: `search.json`, // path to load documents to search
    },
  },
}

module.exports = siteMetadata
