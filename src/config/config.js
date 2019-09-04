module.exports = {
  baseUrl: 'http://localhost:8000/api/',
  appUrls: {
    logout: {
      title: 'Logout',
      url: '/logout',
    },
  },
  apiUrls: {
    geo: {
      url: 'geo',
      result: {
        url: '/result'
      },
      q: {
        url: '/q'
      },
      clear: {
        url: '/clear'
      },
    },
    collections: {
      url: '/collections',
      add: {
        url: '/add'
      },
      info: {
        url: '/info'
      },
      new: {
        url: '/new'
      }
    }
  }
}

