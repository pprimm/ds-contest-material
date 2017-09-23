import React from 'react'
import {Divider} from 'material-ui'
import AppWrapper from '../../components/AppWrapper'
import SystemTitleBar from '../../components/SystemTitleBar'
import StatusList from '../../components/StatusList'
import StatusPanel from '../../components/StatusPanel'
import SystemButtonPanel from '../../components/SystemButtonPanel'

export default function SystemPage() { 
  return (
    <AppWrapper>
      <SystemTitleBar />
      <div>
        <StatusPanel />
        <SystemButtonPanel />
        <Divider />
        <StatusList />
      </div>
    </AppWrapper>
  )
}