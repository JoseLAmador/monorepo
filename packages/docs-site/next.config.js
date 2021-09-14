const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  unstable_staticImage: true,
});

const withTm = require('next-transpile-modules')(['@asjosel/core', '@asjosel/tabs'])

module.exports = withNextra(withTm())
