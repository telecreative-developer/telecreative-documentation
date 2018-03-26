/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: 'User1',
    image: '/test-site/img/superhero.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Telecreative Guides' /* title for your website */,
  tagline: 'Guide for a bright future',
  url: 'https://telecreative.github.io' /* your website url */,
  baseUrl: '/test-site/' /* base url for your project */,
  projectName: 'test-site',
  headerLinks: [
    {doc: 'opening', label: 'Docs'},
    {doc: 'doc4', label: 'API'},
    {page: 'help', label: 'Help'},
    {blog: true, label: 'Blog'},
  ],
  users,
  /* path to images for header/footer */
  headerIcon: 'img/superhero.svg',
  footerIcon: 'img/superhero.svg',
  favicon: 'img/favicon.png',
  /* colors for website */
  colors: {
    primaryColor: '#444',
    secondaryColor: '#fd427b',
  },
  /* custom fonts for website */
  fonts: {
    myFont: [
      "Roboto",
      "sans-serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' Your Name or Your Company Name',
  // organizationName: 'deltice', // or set an env variable ORGANIZATION_NAME
  // projectName: 'test-site', // or set an env variable PROJECT_NAME
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
