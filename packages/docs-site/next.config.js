const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  unstable_staticImage: true,
});

const withTranspile = require('next-transpile-modules')(['@asjosel/core', '@asjosel/tabs'])

module.exports = withTranspile(withNextra())
