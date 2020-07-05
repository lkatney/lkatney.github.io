module.exports = {
  title: 'Playground',
  tagline: 'Welcome to Playground, a cloud based platform where technology & collaboration do wonder.',
  url: 'https://playg.app',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'Nymbian', // Usually your GitHub org/user name.
  projectName: 'Playground', // Usually your repo name.
  stylesheets: [
    // {
    //   href: 'https://fonts.googleapis.com/css?family=Lato:300,400,700,900',
    //   type: 'text/css',
    // },
    {
      href: 'https://fonts.googleapis.com/css?family=Quicksand:300,400,500,600,700',
      type: 'text/css',
    },
  ],
  plugins: ['docusaurus-plugin-sass'],
  themeConfig: {
    disableDarkMode: true,
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Documentation',
          position: 'right',
        },
        { to: 'blog', label: 'Blog', position: 'right' },
        { label: 'Login', position: 'right' }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Product',
          items: [
            {
              label: 'Features',
            },
            {
              label: 'Security'
            },
          ],
        },
        {
          title: 'Docs',
          items: [
            {
              label: 'What is Playground?',
            },
            {
              label: 'Security'
            },
            {
              label: 'Private Space'
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/PlaygApp',
            }, {
              label: 'Linkedin',
              href: 'https://www.linkedin.com/company/playg',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Privacy',
              to: 'docs/legal/privacy-policy',
            },
            {
              label: 'Terms of Use',
              to: 'docs/legal/terms-of-use',
            },
          ],
        },
      ],
      logo: {
        src: 'img/logo-white.svg',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Nymbian Ltd`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'what-is-playground',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Nymbian Ltd`,
          },
        },
        theme: {
          customCss: require.resolve('./src/scss/global.scss'),
        },
      },
    ],
  ],
};
