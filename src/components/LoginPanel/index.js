import React from 'react'
import {connect} from 'cerebral/react'
import {signal} from 'cerebral/tags'
import {
  Button,
  TextField
 } from 'material-ui'

export default connect({
  loginClicked: signal`app.loginClicked`
}, function LoginPanel({classes,loginClicked}) {
  return (
    <div>
      <form style={{display: 'flex', flexWrap: 'wrap'}} noValidate>
        <TextField
          id='name'
          label='Name'
          style={{marginLeft: 20,marginRight: 20,width: '100%',}}
          value={''}
          margin="normal"
        />
        <TextField
          id='password'
          label='Password'
          style={{marginLeft: 20,marginRight: 20,width: '100%',}}
          value={''}
          margin="normal"
        />
      </form>
      <div style={{margin: 20}}>
        <Button style={{width: '100%'}}
          raised color="primary"
          onClick={() => loginClicked({user: 'xyz', password: 'xyz123'})}
        >
          Login
        </Button>
      </div>
    </div>
  )
})