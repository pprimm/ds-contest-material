import Router from '@cerebral/router'

export default Router({
  routes: [{
    path: '/system',
    signal: 'app.systemRouted'
  }, {
    path: '/zones',
    signal: 'app.zonesRouted'
  },{
    path: '/',
    signal: 'app.loginRouted'
  }],
  // Only react to hash urls
  onlyHash: false,

  // Set a base url, if your app lives on a subpath
  baseUrl: '/ds-contest-material',

  // Will allow none matching routes on same origin to run as normal
  allowEscape: false,

  // Will make the router not run the initial route
  preventAutostart: false
})