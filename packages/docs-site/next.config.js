const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  unstable_staticImage: true,
  transpileModules: [
    /^\@asjosel\/.*/
  ]
});
module.exports = withNextra()
