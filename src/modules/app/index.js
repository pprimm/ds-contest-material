import {set} from 'cerebral/operators'
import {state} from 'cerebral/tags'

function dsUpdate({state, props}) {
  console.info(props)
  if (props.hasOwnProperty('online')) {
    //state.set('app.online', props.online)
  }
}

function changePage (page, continueSequence = []) {
  return [
    set(state`app.pageRequest`, page),
    continueSequence
  ]
}

function zonesPageBackClicked({router}) {
  router.goTo('/')
}

function systemPageZonesClicked({router}) {
  router.goTo('/zones')
}

export default {
  state: {
    online: false,
    pageRequest: 'system' // system, zones, getCode  
  },
  signals: {
    dsUpdate: dsUpdate,
    systemRouted: changePage('system'),
    zonesRouted: changePage('zones'),
    zonesPageBackClicked: zonesPageBackClicked,
    systemPageZonesClicked: systemPageZonesClicked
  }
}