import React from 'react'
import {connect} from 'cerebral/react'
import {state, signal} from 'cerebral/tags'
import {
  Button
 } from 'material-ui'

export default connect({
  systemReady: state`system.status.ready`,
  systemState: state`system.status.state`,
  armAwayClicked: signal`system.armAwayClicked`,
  armStayClicked: signal`system.armStayClicked`,
  disarmClicked: signal`system.disarmClicked`
}, function NewButtonPanel({systemReady,systemState,armAwayClicked, armStayClicked, disarmClicked}) {
  const isArmed = state => state !== 'Not Armed'

  return (
    <div>
      <div style={{margin: 20}}>
        <Button style={{width: '100%'}}
          raised color="primary"
          onClick={() => armAwayClicked({code: '1234'})}
          disabled={isArmed(systemState) || !systemReady}
        >
          Arm Away
        </Button>
      </div>
      <div style={{margin: 20}}>
        <Button style={{width: '100%'}}
          raised color="primary"
          onClick={() => armStayClicked({code: '1234'})}
          disabled={isArmed(systemState) || !systemReady}
        >
          Arm Stay
        </Button>
      </div>
      <div style={{margin: 20}}>
        <Button style={{width: '100%'}}
          raised color="accent"
          onClick={() => disarmClicked({code: '1234'})}
          disabled={!isArmed(systemState)}
        >
          disarm
        </Button>
      </div>
    </div>
  )
})