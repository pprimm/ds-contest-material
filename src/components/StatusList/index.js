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
import InboxIcon from 'material-ui-icons/Inbox'


const StatusListItem = ({text}) => (
  <ListItem>
    <ListItemIcon>
      <InboxIcon />
    </ListItemIcon>
  <ListItemText primary={text} />
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
        <StatusListItem text={displayText(openZones,' Open')} />
        <StatusListItem text={displayText(troubleZones,' in Trouble')} />
        <StatusListItem text={displayText(bypassZones,' Bypassed')} />
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