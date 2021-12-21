module.exports = {
  reactStrictMode: true,

  // webcpack config to include node-loader for native module becasue of node-canvas
  webpack: (config) => {
    config.module.rules.push({
      test: /\.node$/,
      loader: 'node-loader',
    })

    return config
  },
  experimental: {
    outputStandalone: true,
  },
}
