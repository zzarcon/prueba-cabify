module.exports = {
  serverRuntimeConfig: { // Will only be available on the server side
  },
  publicRuntimeConfig: { // Will be available on both server and client
    staticFolder: '/static',
    apiUrl: process.env.API_URL
  }
}
