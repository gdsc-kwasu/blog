const pkg = require('./package.json')

module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'custom',
  },
  env: {
    PROD_URI: pkg.homepage,
  },
}
