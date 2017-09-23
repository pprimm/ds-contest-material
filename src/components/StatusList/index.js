import React from 'react'
import {connect} from 'cerebral/react'
import {state} from 'cerebral/tags'
import {
  Divider
 } from 'material-ui'
import List, {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader
} from 'material-ui/List'
import styled from 'styled-components'
import HighlightOffIcon from 'material-ui-icons/HighlightOff'
import CheckCircleIcon from 'material-ui-icons/CheckCircle'
import RemoveCircleIcon from 'material-ui-icons/RemoveCircle'
import ErrorIcon from 'material-ui-icons/Error'

const textPrefix = count => {
  switch (count) {
    case 0: return ('No Zones are ')
    case 1: return ('1 Zone is ')
    default: return (`${count} Zones are `)
  }
}

const OpenListItem = ({count}) => (
  <ListItem>
    <ListItemIcon>
      {
        (count > 0) ?
        <HighlightOffIcon style={{fill: '#cc0000'}}/> :
        <CheckCircleIcon style={{fill: '#009933'}}/>
      }
    </ListItemIcon>
  <ListItemText primary={`${textPrefix(count)}Open`} />
  </ListItem>
)

const TroubleListItem = ({count}) => (
  <ListItem>
    <ListItemIcon>
      <RemoveCircleIcon style={(count > 0) ? {fill: '#cc0000'} : {fill: '#bfbfbf'}}/>
    </ListItemIcon>
  <ListItemText primary={`${textPrefix(count)}in Trouble`} />
  </ListItem>
)

const BypassListItem = ({count}) => (
  <ListItem>
    <ListItemIcon>
      <ErrorIcon style={(count > 0) ? {fill: '#cc9900'} : {fill: '#bfbfbf'}}/>
    </ListItemIcon>
  <ListItemText primary={`${textPrefix(count)}Bypassed`} />
  </ListItem>
)

const ListWrapper = styled.div`
  width: 100%;
  max-width: 360px;
  background: white;
  text-align: left;
`

export default connect({
  openZones: state`system.alerts.openZones`,
  troubleZones: state`system.alerts.troubleZones`,
  bypassZones: state`system.alerts.bypassZones`
}, function StatusList({openZones, troubleZones, bypassZones, classes}) {
  return (
    <ListWrapper>
      <List subheader={<ListSubheader>Zone Status Summary</ListSubheader>}>
        <OpenListItem count={openZones} />
        <TroubleListItem count={troubleZones} />
        <BypassListItem count={bypassZones} />
      </List>
      <Divider />
    </ListWrapper>
  )
})