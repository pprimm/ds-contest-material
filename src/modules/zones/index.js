const ZONE_BYPASS_EVENT = 'zones/toggleBypass'
const TOGGLE_STATUS_EVENT = 'zones/toggleStatus'

function dsUpdate({state, props}) {
  //console.info(props)
  if (props.zones) {
    state.merge('zones', props.zones)
  }
}

function bypassZone({deepstream, props}) {
  //console.info(props)
  deepstream.action(ZONE_BYPASS_EVENT,props)
}

function toggleZone({deepstream, props}) {
  console.info(props)
  deepstream.action(TOGGLE_STATUS_EVENT,props)
}

export default {
  state: {
    Z01: { name: 'unavailable', status: 'disconnected', bypass: false }
  },
  signals: {
    dsUpdate: dsUpdate,
    zonePressed: toggleZone,
    bypassPressed: bypassZone
  }
}