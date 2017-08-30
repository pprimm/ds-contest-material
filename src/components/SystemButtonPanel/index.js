import React from 'react'
import {connect} from 'cerebral/react'
import {signal} from 'cerebral/tags'
import {
  Button
 } from 'material-ui'

export default connect({
  armAwayClicked: signal`system.armAwayClicked`,
  armStayClicked: signal`system.armStayClicked`,
  disarmClicked: signal`system.disarmClicked`
}, function NewButtonPanel({armAwayClicked, armStayClicked, disarmClicked}) {
  return (
    <div>
      <p>
        <Button
          raised color="primary"
          onClick={() => armAwayClicked({code: '1234'})}
        >
          Arm Away
        </Button>
      </p>
      <p>
        <Button
          raised color="primary"
          onClick={() => armStayClicked({code: '1234'})}
        >
          Arm Stay
        </Button>
      </p>
      <p>
        <Button
          raised color="accent"
          onClick={() => disarmClicked({code: '1234'})}
        >
          disarm
        </Button>
      </p>
    </div>
  )
})