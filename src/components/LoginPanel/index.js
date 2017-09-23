import React from 'react'
import {connect} from 'cerebral/react'
import {signal} from 'cerebral/tags'
import {
  Button,
  TextField
 } from 'material-ui'
import styled from 'styled-components'

const FormWrapper = styled.div`
  padding: 25px;
`

const LoginForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  margin: 30;
`

const LoginField = styled(TextField)`
  width: 100%;
`

const Spacer = styled.p`
  padding: 1px;
`

const LoginButton = styled(Button)`
  width: 100%;
`

export default connect({
  loginClicked: signal`app.loginClicked`
}, function LoginPanel({classes,loginClicked}) {
  return (
    <FormWrapper>
      <LoginForm noValidate>
        <LoginField
          id='name'
          label='User Name'
          value={''}
          margin="normal"
        />
        <LoginField
          id='password'
          label='Password'
          value={''}
          margin="normal"
        />
      </LoginForm>
      <Spacer />
      <LoginButton
        raised color="primary"
        onClick={() => loginClicked({user: 'xyz', password: 'xyz123'})}
      >
        Login
      </LoginButton>
    </FormWrapper>
  )
})