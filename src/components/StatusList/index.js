import React from 'react'
import {connect} from 'cerebral/react'
import {state} from 'cerebral/tags'

import PropTypes from 'prop-types'
import {
  withStyles,
  Divider
 } from 'material-ui'
import List, {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader
} from 'material-ui/List'
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

function createStatusList({openZones, troubleZones, bypassZones, classes}) {
  const displayText = (zones, type) => {
    switch (zones) {
      case 0: return (`No Zones are ${type}`)
      case 1: return (`1 Zone is ${type}`)
      default: return (`${zones} Zones are ${type}`)
    }
  }
  return (
    <div className={classes.root}>
      <List subheader={<ListSubheader>Zone Status Summary</ListSubheader>}>
        <OpenListItem count={openZones} />
        <TroubleListItem count={troubleZones} />
        <BypassListItem count={bypassZones} />
      </List>
      <Divider />
    </div>
  )
}

createStatusList.propTypes = {
  classes: PropTypes.object.isRequired,
}

const statusListStyles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    background: theme.palette.background.paper,
    textAlign: 'left'
  }
})
  
export default connect({
    openZones: state`system.alerts.openZones`,
    troubleZones: state`system.alerts.troubleZones`,
    bypassZones: state`system.alerts.bypassZones`
}, withStyles(statusListStyles)(createStatusList))