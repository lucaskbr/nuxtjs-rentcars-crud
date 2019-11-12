export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Rentcars' || process.env.npm_package_name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#FBA617' },
  /*
   ** Global CSS
   */
  css: ['~/styles/global.sass'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/vue-notifications', '~/plugins/vue-form-generator'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/toast',
    '@nuxtjs/axios',
    [
      'nuxt-fontawesome',
      {
        component: 'fa',
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: [
              'faDollarSign',
              'faSnowflake',
              'faMale',
              'faCog',
              'faDoorOpen',
              'faSuitcaseRolling',
              'faTachometerAlt',
              'faStar',
              'faTrash'
            ]
          }
        ]
      }
    ]
  ],
  toast: {
    position: 'top-right',
    register: [
      // Register custom toasts
      {
        name: 'my-error',
        message: 'Oops...Something went wrong',
        options: {
          type: 'error'
        }
      }
    ]
  },
  /*
   ** Axios module config"nuxtjs-rentcars-crud
   ** See https://axios.n"nuxtjs-rentcars-crudoptions
   */
  axios: {
    baseURL: process.env.API_URL || 'http://localhost:3333/',
    redirectError: {
      404: '/notfound'
    }
  },
  /*
   ** Build configuration"nuxtjs-rentcars-crud
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    /*
     ** Run ESLint on save
     */
    extend(config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    }
  }
}
