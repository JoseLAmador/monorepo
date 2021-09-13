const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  unstable_staticImage: true,
  webpack: (config) => {
    config.resolve.symlinks = false
    return config
  }
});
module.exports = withNextra()
