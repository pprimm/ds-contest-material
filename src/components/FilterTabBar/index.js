import React from 'react'
import {connect} from 'cerebral/react'
import {state, signal} from 'cerebral/tags'
import PropTypes from 'prop-types'
import Tabs, { Tab } from 'material-ui/Tabs'
import {
  withStyles
 } from 'material-ui'


function FilterTabBar({zoneTabIndex,tabClicked,classes}) {
  return (
    <div className={classes.root}>
      <Tabs
        value={zoneTabIndex}
        onChange={(event, value) => tabClicked({tabIndex: value})}
        indicatorColor="primary"
        textColor="primary"
        fullWidth
      >
        <Tab label="All" />
        <Tab label="Open" />
        <Tab label="Trouble" />
        <Tab label="Bypass" />
      </Tabs>
    </div>
  )
}

FilterTabBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper
  }
})

export default connect({
  zoneTabIndex: state`app.zoneTabIndex`,
  tabClicked: signal`app.zonesPageTabClicked`
}, withStyles(styles)(FilterTabBar))