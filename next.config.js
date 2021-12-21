module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.node$/,
      loader: 'node-loader',
    })
    return config
  },
  images: {
    loader: 'custom',
  },
}
