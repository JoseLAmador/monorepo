const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  unstable_staticImage: true,
});

const withTm = require('next-transpile-modules')(['@asjosel/core', '@asjosel/tabs'])

module.exports = withNextra(withTm({
  webpack: (config, options) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@asjosel/core': require.resolve('@asjosel/core'),
      '@asjosel/tabs': require.resolve('@asjosel/tabs'),
    }
  }
}))
