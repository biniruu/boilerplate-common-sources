module.exports = {
  webpack: {
    configure: {
      resolve: {
        symlinks: false,
      },
      experiments: {
        topLevelAwait: true,
      },
    },
  },
}
