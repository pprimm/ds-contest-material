import React from 'react'
import FilterTabBar from '../../components/FilterTabBar'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
} from 'material-ui'

import {connect} from 'cerebral/react'
import {signal} from 'cerebral/tags'
import styled from 'styled-components'

const ZoneTitleWrapper = styled.div`
  text-align: left;
  margin-top: 50px;
  witdh: 100%;
`
const ZoneAppBar = styled(AppBar)`
  position: fixed;
  top: 0px
`
const TitleText = styled(Typography)`
  flex: 1;
`

export default connect({
  backClicked: signal`app.zonesPageBackClicked`
}, function ZonesTitleBar({backClicked,classes}) {
  return (
    <ZoneTitleWrapper>
      <ZoneAppBar className="header">

        <Toolbar>
          <TitleText type="title" color="inherit">
            Alarm Zones List
          </TitleText>
          <Button color="contrast" onClick={() => backClicked()}>
            Back
          </Button>
        </Toolbar>
        <FilterTabBar />
      </ZoneAppBar>
    </ZoneTitleWrapper>
  )
})
