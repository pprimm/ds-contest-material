const ZONE_BYPASS_EVENT = 'zones/toggleBypass'
const TOGGLE_STATUS_EVENT = 'zones/toggleStatus'

function dsUpdateZones({state, props}) {
  //console.info(props)
  if (props.zones) {
    state.merge('zones', props.zones)
  }
}

function dsUpdateZone({state, props}) {
  //console.info(props)
  if (props.zoneID && props.zoneData) {
    const path = `zones.${props.zoneID}`
    //console.log({path: path, data: props.zoneData})
    state.set(path, props.zoneData)
  }
}

function bypassZone({deepstream, props}) {
  //console.info(props)
  deepstream.action(ZONE_BYPASS_EVENT,props)
}

function toggleZone({deepstream, props}) {
  //console.info(props)
  deepstream.action(TOGGLE_STATUS_EVENT,props)
}

export default {
  state: {},
  signals: {
    dsUpdateZones: dsUpdateZones,
    dsUpdateZone: dsUpdateZone,
    zonePressed: toggleZone,
    bypassPressed: bypassZone
  }
}