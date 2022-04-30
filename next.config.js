module.exports = {
  async redirects() {
    return [
      {
        source: '/en',
        destination: '/', // Matched parameters can be used in the destination
        permanent: true,
      },
      {
        source: '/id',
        destination: '/',
        permanent: true,
      },
      {
        source: '/en/:slug*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/id/:slug*',
        destination: '/',
        permanent: true,
      },
    ]
  },
}