import createDeepstream from 'deepstream.io-client-js'
import dsCredentials from './dsCredentials.js'

// We create a factory, allowing you to pass in options to it
function DeepstreamHubProviderFactory (options = {}) {
  //console.info('DeepstreamHubProviderFactory() called')
  // We use a variable to cache the created provider
  let cachedProvider = null

  // This is the function that creates the provider,
  // typically just an object with some methods
  function createProvider (context) {
    //console.info('createProvider() called')
    const updateSystem = context.controller.getSignal('system.dsUpdate')
    const updateZones = context.controller.getSignal('zones.dsUpdateZones')
    const updateZone = context.controller.getSignal('zones.dsUpdateZone')
    const updateApp = context.controller.getSignal('app.dsUpdate')
    
    const client = createDeepstream(dsCredentials.url)

    client.on('connectionStateChanged', state => {
      console.info(state)
    })

    client.on('error', (error, event, topic) => {
      console.error(error, event, topic)
    })

    client.login(dsCredentials.authParams, (success, data) => {
      if (success) {
        console.info('login success')
        updateApp({online: true})
        const sys = client.record.getRecord('test/system')
        sys.subscribe( (data) => {
          updateSystem({system: data})
        })
        const zones = client.record.getRecord('test/zones')
        zones.whenReady(record => {
          const recordData = record.get()
          //updateZones({zones: data})
          const keys = Object.keys(recordData)
          keys.map( (id) => {
            record.subscribe(id, data => {
              //console.info({zoneID: id, zoneData: data})
              updateZone({zoneID: id, zoneData: data})
            },true)
          })
          //record.subscribe( (data) => {
          //  updateZones({zones: data})
          //}, true)
        })
      } else {
        // notify user
        console.error('login error')
      }
    })

    return {
      dsClient: () => client,
      action: (event, data) => {
        client.event.emit(event,data)
      },
      login: (props) => {
        console.info(props)
      }
    }
  }

  // The function that is run by Cerebral, providing the context
  // for you to attach your provider to
  function DeepstreamHubProvider (context) {
    //console.info('DeepstreamHubProvider() called')
    context.deepstream = cachedProvider = (cachedProvider || createProvider(context))

    // You can wrap the provider with the debugger
    // to show information about its usage in the debugger
    if (context.debugger) {
      context.debugger.wrapProvider('deepstream')
    }

    // Always return the context after mutating it
    return context
  }

  return DeepstreamHubProvider
}

export default DeepstreamHubProviderFactory