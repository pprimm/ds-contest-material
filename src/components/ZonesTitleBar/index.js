import React from 'react'

import PropTypes from 'prop-types'
import {
  withStyles,
  AppBar,
  Toolbar,
  Typography,
  Button,
} from 'material-ui'

import {connect} from 'cerebral/react'
import {signal} from 'cerebral/tags'

function ZonesTitleBar({backClicked,classes}) {
  return (
    <div className={classes.root}>
      <AppBar 
        style={{ position: 'fixed', top: 0 }}
        className="header"
      >
        <div className={classes.positioning}></div>
        <Toolbar>
          <Typography type="title" color="inherit" className={classes.flex}>
            Alarm Zones List
          </Typography>
          <Button color="contrast" onClick={() => backClicked()}>
            Back
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

ZonesTitleBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = {
  root: {
    textAlign: 'left',
    marginTop: 70,
    width: '100%'
  },
  flex: {
    flex: 1,
  },
  positioning: {
    height: 15
  }
}

export default connect({
  backClicked: signal`app.zonesPageBackClicked`
}, withStyles(styles)(ZonesTitleBar))
