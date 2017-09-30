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
  id: props`id`,
  name: state`zones.${props`id`}.name`,
  status: state`zones.${props`id`}.status`,
  bypass: state`zones.${props`id`}.bypass`,
  zonePressed: signal`zones.zonePressed`,
  bypassPressed: signal`zones.bypassPressed`
}, function NewZoneListItem({id, name, status, bypass, zonePressed, bypassPressed}) {
  return (
    <ListItemWrapper zoneStatus={status}>
      <ListItem onClick={() => zonePressed({id:id})}>
        <ListItemText
          primary={`${id} - ${name}`}
          secondary={bypass ? `${status} (Bypassed)` : status}
        />
        <ListItemSecondaryAction>
          <Switch checked={bypass} onChange={() => bypassPressed({id: id})}/>
        </ListItemSecondaryAction>
      </ListItem>
    </ListItemWrapper>
  )
})

const ZoneListWrapper = styled.div`
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