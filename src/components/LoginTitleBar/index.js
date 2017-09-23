import React from 'react'
import {
  AppBar,
  Toolbar,
  Typography
} from 'material-ui'
import styled from 'styled-components'

const LoginWrapper = styled.div`
  text-align: left;
  margin-top: 50px;
  witdh: 100%;
`
const LoginAppBar = styled(AppBar)`
  position: fixed;
  top: 0px
`

const TitleText = styled(Typography)`
  flex: 1;
`

export default function LoginTitleBar({zonesClicked}) {
  return (
    <LoginWrapper>
      <LoginAppBar>
        <Toolbar>
          <TitleText type="title" color="inherit">
            System Login
          </TitleText>
        </Toolbar>
      </LoginAppBar>
    </LoginWrapper>
  )
}
