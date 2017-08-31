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

function systemPageZonesClicked({router}) {
  router.goTo('/zones')
}

function zonesPageBackClicked({router}) {
  router.goTo('/')
}

const filternames = [
  'all',
  'open',
  'trouble',
  'bypass'
]

function zonesPageTabClicked({state,props}) {
  //console.info(props)
  state.set('app.zoneTabIndex', props.tabIndex)
  state.set('app.filter', filternames[props.tabIndex])
  //set(state`app.filter`, props.tabIndex)
}

export default {
  state: {
    online: false,
    pageRequest: 'system', // system, zones, getCode
    zoneTabIndex: 0,
    filter: 'all'
  },
  signals: {
    dsUpdate: dsUpdate,
    systemRouted: changePage('system'),
    systemPageZonesClicked: systemPageZonesClicked,
    zonesRouted: changePage('zones'),
    zonesPageBackClicked: zonesPageBackClicked,
    zonesPageTabClicked: zonesPageTabClicked
  }
}