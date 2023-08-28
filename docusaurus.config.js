// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const fs = require("fs");
const path = require("path");

const extOriginRepo = {
  'ext/haskell-flake': 'https://github.com/srid/haskell-flake.git',
  'ext/nixos-flake': 'https://github.com/srid/nixos-flake.git',
  'ext/services-flake': 'https://github.com/juspay/services-flake.git',
  'ext/process-compose-flake': 'https://github.com/Platonic-Systems/process-compose-flake.git',
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Zero to Flakes',
  tagline: 'A guide to writing modular Nix flakes for developing software and systems',
  favicon: 'img/logo.svg',

  // Set the production url of your site here
  url: 'https://zero-to-flakes.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'juspay', // Usually your GitHub org/user name.
  projectName: 'zero-to-flakes', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: ({ docPath, versionDocsDirPath }) => {
            const versionDocPath = path.join(versionDocsDirPath, docPath);
            let editURL;
            const realPath = fs.realpathSync(versionDocPath);
            const extPath = Object.keys(extOriginRepo).find(
              extPath => realPath.includes(extPath)
            );
            if (extPath) {
              const extOriginRepoURL = extOriginRepo[extPath];
              const extGitPath = path.join('.git/modules', extPath);
              const refContent = fs.readFileSync(path.join(extGitPath, 'HEAD'), 'utf-8').trim();
              const commitHash = refContent.startsWith('ref:')
                ? fs.readFileSync(path.join(extGitPath, refContent.split(' ')[1]), 'utf-8').trim()
                : refContent;
             editURL = `${extOriginRepoURL.replace(/\.git$/, '')}/blob/${commitHash}/${path.relative(extPath, realPath)}`;
            } else {
              editURL = `https://github.com/juspay/zero-to-flakes/tree/main/${versionDocPath}`;
            }
            return editURL;
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [require.resolve(path.join(__dirname, '/plugins/symlink-resolver'))],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      /*
      announcementBar: {
        id: 'wip',
        content: 'Zero to Flakes is a <a href="/about">work in progress</a>.',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: true,
      },
      */
      navbar: {
        title: 'Zero to Flakes',
        logo: {
          alt: 'Zero to Flakes Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Content',
          },
          {
            to: 'about',
            position: 'left',
            label: 'About',
          },
          {
            href: 'https://github.com/juspay/zero-to-flakes',
            label: 'GitHub',
            position: 'right',
          },
      ],
    },
    footer: {
      style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Get Started',
                to: '/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/nix',
              },
              {
                label: 'Matrix',
                href: 'http://app.element.io/#/room/%23zero-to-flakes:matrix.org',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/zerotoflakes',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/juspay/zero-to-flakes',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Juspay, Inc.`,
      },
      prism: {
        defaultLanguage: 'nix',
        additionalLanguages: ['haskell', 'nix', 'rust'],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
