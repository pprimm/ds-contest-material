import Router from '@cerebral/router'

export default Router({
  routes: [{
    path: '/',
    signal: 'app.systemRouted'
  }, {
    path: '/zones',
    signal: 'app.zonesRouted'
  }],
  // Only react to hash urls
  onlyHash: false,

  // Set a base url, if your app lives on a subpath
  baseUrl: null,

  // Will allow none matching routes on same origin to run as normal
  allowEscape: false,

  // Will make the router not run the initial route
  preventAutostart: false
})