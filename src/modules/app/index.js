import { set } from 'cerebral/operators'
import { props, state } from 'cerebral/tags'

function dsUpdate({router, state, props}) {
  console.info(props)
  if (props.hasOwnProperty('online')) {
    state.set('app.online', props.online)
    if (props.online) {
      state.set('app.pageRequest','system')
    } else {
      state.set('app.pageRequest','login')
    }
  }
}

function loginClicked({deepstream, props}) {
  deepstream.login(props)
}

function systemPageZonesClicked({state}) {
  state.set('app.pageRequest','zones')
}

function zonesPageBackClicked({state}) {
  state.set('app.pageRequest','system')
}

const filternames = [
  'all',
  'open',
  'trouble',
  'bypass'
]

function getFilterName({props}) {
  props.filterName = filternames[props.tabIndex]
}

export default {
  state: {
    online: false,
    pageRequest: 'login', // system, zones, getCode
    zoneTabIndex: 0,
    filter: 'all'
  },
  signals: {
    dsUpdate: dsUpdate,
    loginClicked: loginClicked,
    systemPageZonesClicked: systemPageZonesClicked,
    zonesPageBackClicked: zonesPageBackClicked,
    zonesPageTabClicked: [
      set(state`app.zoneTabIndex`, props`tabIndex`),
      getFilterName,
      set(state`app.filter`, props`filterName`)
    ]
  }
}