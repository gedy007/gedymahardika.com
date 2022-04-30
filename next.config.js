module.exports = {
  async redirects() {
    return [
      {
        source: '/en/:slug*',
        destination: '/', // Matched parameters can be used in the destination
        permanent: true,
      },
      {
        source: '/id/:slug*',
        destination: '/', // Matched parameters can be used in the destination
        permanent: true,
      },
    ]
  },
}