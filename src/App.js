import React from 'react'
import './App.css'
import {connect} from 'cerebral/react'
import {state} from 'cerebral/tags'

import SystemPage from './pages/system'
import ZonesPage from './pages/zones'

const pages = {
  system: SystemPage,
  zones: ZonesPage
}

export default connect({
  pageRequest: state`app.pageRequest`
}, 
  function App({online, pageRequest}) {
    const Page = pages[pageRequest]

    return (
      <Page />
    )
  }
)