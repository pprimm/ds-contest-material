import React from 'react'
import {connect} from 'cerebral/react'
import {state} from 'cerebral/tags'

const pages = {
  system: require('./pages/system').default,
  zones: require('./pages/zones').default,
  login: require('./pages/login').default
}

export default connect({
  pageRequest: state`app.pageRequest`
}, 
  function App({pageRequest}) {
    const Page = pages[pageRequest]
    return (<Page />)
  }
)