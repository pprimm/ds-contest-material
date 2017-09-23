import React from 'react'

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
} from 'material-ui'

import {connect} from 'cerebral/react'
import {signal} from 'cerebral/tags'
import styled from 'styled-components'

const SystemTitleWrapper = styled.div`
  text-align: left;
  margin-top: 50px;
  witdh: 100%;
`
const SystemAppBar = styled(AppBar)`
  position: fixed;
  top: 0px
`
const TitleText = styled(Typography)`
  flex: 1;
`

export default connect({
  zonesClicked: signal`app.systemPageZonesClicked`
}, function SystemTitleBar({zonesClicked,classes}) {
  return (
    <SystemTitleWrapper>
      <SystemAppBar className="header">
        <Toolbar>
          <TitleText type="title" color="inherit">
            Alarm System
          </TitleText>
          <Button color="contrast" onClick={() => zonesClicked()}>
            Zones
          </Button>
        </Toolbar>
      </SystemAppBar>
    </SystemTitleWrapper>
  )
})