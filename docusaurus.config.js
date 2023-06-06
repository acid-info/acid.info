// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
require('dotenv').config()

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Acid.info',
  url: 'https://acid.info',
  baseUrl: '/',

  markdown: {
    mermaid: true,
  },

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@acid-info/logos-docusaurus-preset',
      /** @type {import('@acid-info/logos-docusaurus-preset').PluginOptions} */
      ({
        businessUnit: 'Logos',
        theme: {
          name: 'default',
          options: {
            customCss: [require.resolve('./src/css/custom.scss')],
          },
        },
        docs: {
          routeBasePath: '/',
        },
      }),
    ],
  ],
  themes: ['@docusaurus/theme-mermaid'],

  themeConfig:
  /** @type {import('@acid-info/logos-docusaurus-preset').ThemeConfig} */
      ({
        navbar: {
          hideOnScroll: true,
          items: [
            {
              type: 'search',
            },
            {
              label: 'Github',
              href: 'https://github.com/acid-info',
            },
          ],
        },
        footer: {
          copyright: 'acid.info @2023<br/>All Rights Reserved.',
          links: [
            {
              items: [
                {
                  href: 'https://twitter.com/acid-info',
                  label: 'Twitter',
                },
                {
                  href: 'https://discord.gg/<DISCORD_HANDLE>',
                  label: 'Discord',
                },
                {
                  href: '/',
                  label: 'Docs',
                },
                {
                  href: 'https://github.com/<GITHUB_HANDLE>',
                  label: 'Github',
                },
              ],
            },
            {
              items: [
                {
                  href: '/',
                  label: 'Contact us',
                },
                {
                  href: 'https://jobs.status.im/',
                  label: 'Work with us',
                },
                {
                  href: '/terms',
                  label: 'Terms & conditions',
                },
              ],
            },
          ],
        }
      }),
}

module.exports = config
