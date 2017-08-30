import React from 'react'
import {connect} from 'cerebral/react'
import {state} from 'cerebral/tags'


export default connect({
  line1: state`system.display.0`,
  line2: state`system.display.1`
}, function AlarmDisplay({ready, line1, line2}) {
  return (
    <div className="App-header">
      <h2>{line1}</h2>
      <h2>{line2}</h2>
    </div>
  )
})