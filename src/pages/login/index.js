import React from 'react'
import {Divider} from 'material-ui'
import LoginTitleBar from '../../components/LoginTitleBar'
import StatusPanel from '../../components/StatusPanel'
import LoginPanel from '../../components/LoginPanel'

export default function SystemPage() { 
  return (
    <div className="App">
      <LoginTitleBar />
      <div>
        <StatusPanel />
        <LoginPanel />
        <Divider />
      </div>
    </div>
  )
}