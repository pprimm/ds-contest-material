const ZONE_BYPASS_EVENT = 'zones/toggleBypass'

function dsUpdate({state, props}) {
  //console.info(props)
  if (props.zones) {
    state.merge('zones', props.zones)
  }
}

function bypassPressed({deepstream, props}) {
  console.info(props)
  deepstream.action(ZONE_BYPASS_EVENT,props)
}

export default {
  state: {
    Z01: { name: 'unavailable', status: 'disconnected', bypass: false }
  },
  signals: {
    dsUpdate: dsUpdate,
    bypassPressed: bypassPressed
  }
}