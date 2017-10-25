const ARM_AWAY_EVENT = 'system/armAway'
const ARM_STAY_EVENT = 'system/armStay'
const DISARM_EVENT = 'system/disarm'

function dsUpdate({state, props}) {
  //console.info(props)
  if (props.system) {
    state.merge('system', props.system)
  }
}

function armAway({deepstream, props}) {
  //console.info(props)
  if (typeof props.code === 'string') {
    deepstream.action(ARM_AWAY_EVENT,props)
  }
}

function armStay({deepstream, props}) {
  //console.info(props)
  if (typeof props.code === 'string') {
    deepstream.action(ARM_STAY_EVENT,props)
  }
}

function disarm({deepstream, props}) {
  //console.info(props)
  if (typeof props.code === 'string') {
    deepstream.action(DISARM_EVENT,props)
  }
}

export default {
  state: {
    display: [
      'Initializing...',
      ''
    ]
  },
  signals: {
    dsUpdate: dsUpdate,
    armAwayClicked: armAway,
    armStayClicked: armStay,
    disarmClicked: disarm
  }
}