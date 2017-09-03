import {Controller} from 'cerebral'
import deepstream from './deepstreamhub-provider'
import app from './modules/app'
import system from './modules/system'
import zones from './modules/zones'

const Devtools = (
  process.env.NODE_ENV === 'production' ? null : require('cerebral/devtools').default 
)

function testAction({deepstream}) {
  //console.info(`inside testAction ${Object.keys(deepstream)}`)
}


export default Controller({
  devtools: Devtools && Devtools({
    host: 'localhost:8585' 
  }),
  modules: {
    app: app,
    system: system,
    zones: zones
  },
  providers: [
    deepstream({
      url: 'wss://013.deepstreamhub.com?apiKey=12821441-678c-487f-b33c-f2fdbe2da9da'
    })
  ],
  signals: {
    someSignal: testAction
  }
})