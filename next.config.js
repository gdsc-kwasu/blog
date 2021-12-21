module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    // loader for node-canvas node native module
    config.module.rules.push({
      test: /\.node$/,
      loader: 'node-loader',
    })

    return config
  },
}
