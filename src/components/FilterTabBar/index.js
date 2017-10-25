import React from 'react'
import {connect} from 'cerebral/react'
import {state, signal} from 'cerebral/tags'
import Tabs, { Tab } from 'material-ui/Tabs'
import styled from 'styled-components'

const TabBarWrapper = styled.div`
  background-color: white;
`

 export default connect({
  zoneTabIndex: state`app.zoneTabIndex`,
  tabClicked: signal`app.zonesPageTabClicked`
}, function FilterTabBar({zoneTabIndex,tabClicked}) {
  return (
    <TabBarWrapper>
      <Tabs
        value={zoneTabIndex}
        onChange={(event, value) => tabClicked({tabIndex: value})}
        indicatorColor="primary"
        textColor="primary"
        fullWidth
      >
        <Tab label="All" />
        <Tab label="Open" />
        <Tab label="Trouble" />
        <Tab label="Bypass" />
      </Tabs>
    </TabBarWrapper>
  )
})