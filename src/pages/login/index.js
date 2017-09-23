import React from 'react'
import {Divider} from 'material-ui'
import AppWrapper from '../../components/AppWrapper'
import LoginTitleBar from '../../components/LoginTitleBar'
import StatusPanel from '../../components/StatusPanel'
import LoginPanel from '../../components/LoginPanel'

export default function LoginPage() { 
  return (
    <AppWrapper>
      <LoginTitleBar />
      <div>
        <StatusPanel />
        <LoginPanel />
        <Divider />
      </div>
    </AppWrapper>
  )
}