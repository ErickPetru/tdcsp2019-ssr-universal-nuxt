const pkg = require('./package')

module.exports = {
  mode: 'universal',
  head: {
    title: 'TDC SP 2019 Universal App Demo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Nunito&display=swap' }
    ]
  },
  loading: { color: '#ffb300' },
  plugins: [
    'plugins/date-filter.js',
    'plugins/truncate-filter.js'
  ],
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
    baseURL: 'https://tdcsp2019-ssr-universal-api.appspot.com/'
  }
}
