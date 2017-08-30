import React from 'react'
import {connect} from 'cerebral/react'
import {state, signal, props} from 'cerebral/tags'

import PropTypes from 'prop-types'
import {
  withStyles,
  Divider
 } from 'material-ui'
import List, {
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from 'material-ui/List'

import Switch from 'material-ui/Switch'


const ZoneListItem = connect({
  id: props`id`,
  name: state`zones.${props`id`}.name`,
  status: state`zones.${props`id`}.status`,
  bypass: state`zones.${props`id`}.bypass`,
  bypassPressed: signal`zones.bypassPressed`
}, function NewZoneListItem({id, name, status, bypass,bypassPressed}) {
  return (
    <ListItem>
      <ListItemText
        primary={`${id} - ${name}`}
        secondary={bypass ? `${status} (Bypassed)` : status}
      />
      <ListItemSecondaryAction>
        <Switch checked={bypass} onChange={() => bypassPressed({id: id})}/>
      </ListItemSecondaryAction>
    </ListItem>
  )
})

function ZoneList({zones,classes}) {
  //console.info(zones)
  return (
    <div className={classes.root}>
      <List>
        {
          zones.map((id) => (
            <div key={id}>
              <ZoneListItem id={id} />
              <Divider />
            </div>
          ))
        }        
      </List>
    </div>
  )
}

ZoneList.propTypes = {
  classes: PropTypes.object.isRequired,
}

const zoneListStyles = theme => ({
  root: {
    width: '100%',
    background: theme.palette.background.paper,
    textAlign: 'left'
  }
})

export default connect({
  zones: state`zones.*`
}, withStyles(zoneListStyles)(ZoneList))