import {Controller} from 'cerebral'
import deepstream from './deepstreamhub-provider'
import app from './modules/app'
import system from './modules/system'
import zones from './modules/zones'
import dsCredentials from './dsCredentials.js'
const Devtools = (
  process.env.NODE_ENV === 'production' ? null : require('cerebral/devtools').default 
)

function testAction({deepstream}) {
  //console.info(`inside testAction ${Object.keys(deepstream)}`)
}


export default Controller({
  devtools: Devtools && Devtools({
    host: 'localhost:8585',

    // By default the devtools tries to reconnect
    // to debugger when it can not be reached, but
    // you can turn it off
    reconnect: false,
    
    // Time travel
    storeMutations: false,

    // Shows a warning when you have components with number of
    // state dependencies or signals above the set number  
    bigComponentsWarning: 6,
    
    // Warnings when passing objects and arrays as props to child
    // components. They should rather be connected directly
    warnStateProps: true
  }),
  modules: {
    app: app,
    system: system,
    zones: zones
  },
  providers: [
    deepstream(dsCredentials)
  ],
  signals: {
    someSignal: testAction
  }
})