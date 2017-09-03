import React from 'react'

import PropTypes from 'prop-types'
import {
  withStyles,
  AppBar,
  Toolbar,
  Typography
} from 'material-ui'

function LoginTitleBar({zonesClicked,classes}) {
  return (
    <div className={classes.root}>
      <AppBar 
        style={{ position: 'fixed', top: 0 }}
        className="header"
      >
        <div className={classes.positioning}></div>
        <Toolbar>
          <Typography type="title" color="inherit" className={classes.flex}>
            System Login
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

LoginTitleBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = {
  root: {
    textAlign: 'left',
    marginTop: 60,
    width: '100%'
  },
  flex: {
    flex: 1,
  },
  positioning: {
    height: 15
  }
}

export default withStyles(styles)(LoginTitleBar)
