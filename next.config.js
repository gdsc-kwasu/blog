const pkg = require('./package.json')

module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    loader: 'custom',
  },
  env: {
    PROD_URI: pkg.homepage,
  },
}
