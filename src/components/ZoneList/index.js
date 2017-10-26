import React from 'react'
import {connect} from 'cerebral/react'
import {state, signal, props} from 'cerebral/tags'
import {
  Divider
 } from 'material-ui'
import List, {
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from 'material-ui/List'
import Switch from 'material-ui/Switch'
import styled from 'styled-components'
import filteredZoneIds from '../../computed/filteredZoneIds'

const listItemColors = {
  Open: '#ffffcc',
  Trouble: '#ffd6cc'
}

const ListItemWrapper = styled.div`
  background-color: ${props => listItemColors[props.zoneStatus] || 'white'};
`

const ZoneListItem = connect({
  //name: state`zones.${props`id`}.name`,
  //status: state`zones.${props`id`}.status`,
  //bypass: state`zones.${props`id`}.bypass`,
  zone: state`zones.${props`id`}`,
  zonePressed: signal`zones.zonePressed`,
  bypassPressed: signal`zones.bypassPressed`
}, function ZoneListItem({id, zone, zonePressed, bypassPressed}) {
  return (
    <ListItemWrapper zoneStatus={zone.status}>
      <ListItem onClick={() => zonePressed({id:id})}>
        <ListItemText
          primary={`${id} - ${zone.name}`}
          secondary={zone.bypass ? `${zone.status} (Bypassed)` : zone.status}
        />
        <ListItemSecondaryAction>
          <Switch checked={zone.bypass} onChange={() => bypassPressed({id: id})}/>
        </ListItemSecondaryAction>
      </ListItem>
    </ListItemWrapper>
  )
})

const ZoneListWrapper = styled.div`
  margin-top: 98px;
  width: 100%;
  text-align: left;
`

export default connect({
  filtered: filteredZoneIds,
}, function ZoneList({filtered,classes}) {
  return (
    <ZoneListWrapper>
      <List>
        {
          filtered.map((id) => (
            <div key={id}>
              <ZoneListItem id={id} />
              <Divider />
            </div>
          ))
        }        
      </List>
    </ZoneListWrapper>
  )
})