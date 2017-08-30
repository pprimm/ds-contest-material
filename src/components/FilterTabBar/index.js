import React from 'react'
import PropTypes from 'prop-types'
import Tabs, { Tab } from 'material-ui/Tabs'
import {
  withStyles,
  AppBar
 } from 'material-ui'
function handleTabChange(event, value) {
  console.info(`Tab selected: ${value}`)
}

function FilterTabBar(props) {
  const classes = props.classes;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={0}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          fullWidth
        >
          <Tab label="All" />
          <Tab label="Open" />
          <Tab label="Trouble" />
          <Tab label="Bypassed" />
        </Tabs>
      </AppBar>
    </div>
  )
}

FilterTabBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

const tabsStyles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper
  }
})

export default withStyles(tabsStyles)(FilterTabBar)