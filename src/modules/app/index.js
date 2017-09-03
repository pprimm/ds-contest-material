// yes...it's a little freaky.  No imports becuase everything this module needs is injected by Cerebral

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

function zonesPageTabClicked({state,props}) {
  //console.info(props)
  state.set('app.zoneTabIndex', props.tabIndex)
  state.set('app.filter', filternames[props.tabIndex])
  //set(state`app.filter`, props.tabIndex)
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
    zonesPageTabClicked: zonesPageTabClicked
  }
}