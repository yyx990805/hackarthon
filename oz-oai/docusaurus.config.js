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
            label: 'Dokumentacja',
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
            title: 'Dokumentacja i informacje dla uczestników',
            items: [
              {
                label: 'Wprowadzenie do API',
                to: '/docs/intro',
              },
              {
                label: 'Przykładowe zastosowania',
                to: '/docs/intro',
              },
              {
                label: 'Niezbędne informacje',
                to: '/blog/niezbędne-informacje',
              },
              // {
              //   label: "MoSCoW - must-have or should-have, could-have or won't-have (wishes)",
              //   // label: "<acronym title=\"Must or should, cant or wont\">MoSCoW</a>",
              //   to: 'https://docs.google.com/document/d/1ut392VJllwiy2O3S8Y4PabuarJwo-ac8AONmufrXwPg/edit',
              // },
              // {
              //   label: 'O zasobach z kolekcji Zachety (ABOUT_RESOURCES)',
              //   href: 'https://docs.google.com/document/d/1Z2GCUnWMAg960x5Px6laLIziCFVR_5_flnOr0yUaJcw/edit'
              // },
              // {
              //   label: 'Ścieżki tematyczne (wybrane zasoby, gdrive)',
              //   href: 'https://drive.google.com/drive/folders/1Lo6LKiaG3CNC6P44Vcmc78RTum_Em6kN'
              // },
              // {
              //   label: "Materiały dla uczestników (google-drive)",
              //   to: 'https://drive.google.com/drive/folders/1qjI6F6EbD_BWWXGGhfkcl5Bi_-SDJw08',
              // },
              // {
              //   label: "Wytyczne WCAG",
              //   to: 'https://wcag.lepszyweb.pl/',
              // },
              // {
              //   label: "Kryteria punktacji",
              //   to: 'https://docs.google.com/document/d/1Vg-h1JUzN4EydLFmGD0hVeKigqUKlqgV9SfL9DfrGq4/edit',
              // },
              {
                label: "Szablon prezentacji finałowej",
                to: 'https://docs.google.com/presentation/d/136SF2reXou75C-DFJs0KFrDDCe94j8k6/edit#slide=id.p1',
              },
              // {
              //   label: "Link do spotkań na ZOOM",
              //   to: 'https://us02web.zoom.us/meeting/register/tZcpf-2upzIpHNXKLvxBBCX-PLmYB5x7Rr_u',
              // },
            ],
          },
          {
            title: 'Narzędzia',
            items: [
              {
                label: 'ModifyHeaderValue',
                href: 'https://chrome.google.com/webstore/detail/modify-header-value-http/cbdibdfhahmknbkkojljfncpnhmacdek',
              },
              {
                label: 'SimpleModifyHeader',
                href: 'https://github.com/didierfred/SimpleModifyHeaders'
              },
              {
                label: 'JSONFormatter',
                href: 'http://goo.gl/ZDLWY0?JSONFormatter'
              },
              {
                label: 'Insomnia (klient REST)',
                href: 'https://insomnia.rest/'
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
