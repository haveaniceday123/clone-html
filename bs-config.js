module.exports = {
  server: {
    middleware: {
      // overrides the second middleware default with new settings
      1: require('connect-history-api-fallback')({
        index: '/chapter10_1.html',
        verbose: true
      })
    }
  }
};