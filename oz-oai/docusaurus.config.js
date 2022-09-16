// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Open Zachęta',
  tagline: 'dokumentacja API dla uczestników Hack(art)honu',
  url: 'https://hack.zacheta.art.pl',
  baseUrl: '/hackarthon/',
  // onBrokenLinks: 'throw',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'favicon_io/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'zachetapl', // Usually your GitHub org/user name.
  projectName: 'zacheta', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pl',
    locales: ['en', 'pl'],
  },

  scripts: [
    // https://docusaurus.io/docs/api/docusaurus-config#scripts
    // {src: 'https://cdn.tailwindcss.com', async: true},
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Zachęta API',
        logo: {
          alt: 'Zachęta API',
          src: 'logo_zacheta.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Wprowadzenie',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   href: 'https://github.com/zacheta/zacheta',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Wprowadzenie do API',
                to: '/docs/intro',
              },
              {
                label: 'Przykładowe zastosowania',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Narzędzia',
            items: [
              {
                label: 'Muzeum Zachęta',
                href: 'https://zacheta.art.pl/pl',
              },
              {
                label: 'Slack',
                href: 'https://hackarthon.slack.com',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/Zacheta',
              },
              {
                label: 'Facebook',
                href: 'https://facebook.com/zacheta'
              },
            ],
          },
          {
            title: 'Więcej',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/zacheta',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Zachęta. Zasilane przez <a href="https://docusaurus.io">Docusaurus</a>.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
