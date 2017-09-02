import React from 'react'
import './App.css'
import {connect} from 'cerebral/react'
import {state} from 'cerebral/tags'

import SystemPage from './pages/system'
import ZonesPage from './pages/zones'
import LoginPage from './pages/login'

const pages = {
  system: SystemPage,
  zones: ZonesPage,
  login: LoginPage
}

export default connect({
  pageRequest: state`app.pageRequest`
}, 
  function App({pageRequest}) {
    const Page = pages[pageRequest]

    return (
      <Page />
    )
  }
)