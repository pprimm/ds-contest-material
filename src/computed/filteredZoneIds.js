import { compute } from 'cerebral'
import { state } from 'cerebral/tags'

export default compute(
  state`app.filter`,
  state`zones`,
  (filter,zones) => {
    return Object.keys(zones).filter(id => {
      return (
        filter === 'all' ||
        (filter === 'open' && zones[id].status === 'Open') ||
        (filter === 'trouble' && zones[id].status === 'Trouble') ||
        (filter === 'bypass' && zones[id].bypass)
      )
    })
  }
)