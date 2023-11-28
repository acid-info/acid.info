// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
require("dotenv").config();

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Acid.info",
  url: "https://acid.info",
  baseUrl: "/",

  markdown: {
    mermaid: true,
  },

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "@acid-info/logos-docusaurus-preset",
      /** @type {import('@acid-info/logos-docusaurus-preset').PluginOptions} */
      ({
        businessUnit: "Acid.info",
        theme: {
          name: "default",
          options: {
            customCss: [require.resolve("./src/css/custom.scss")],
            typography: {
              genericFontFamily: "monospace",
            },
          },
        },
        docs: {
          routeBasePath: "/",
          path: "root-pages",
        },
        og: {},
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@acid-info/logos-docusaurus-preset').ThemeConfig} */
    ({
      colorMode: {
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        hideOnScroll: true,
        items: [
          {
            type: "search",
          },
          {
            label: "Github",
            href: "https://github.com/acid-info",
          },
        ],
      },
      footer: {
        copyright: "acid.info @2023<br/>All Rights Reserved.",
        links: [
          {
            items: [
              {
                href: "https://twitter.com/ac1d_info",
                label: "Twitter",
              },
              {
                href: "https://github.com/acid-info",
                label: "Github",
              },
            ],
          },
          {
            items: [
              {
                href: "https://jobs.status.im/",
                label: "Work with us",
              },
              {
                href: "/terms",
                label: "Terms & conditions",
              },
            ],
          },
        ],
      },
    }),
};

module.exports = config;
