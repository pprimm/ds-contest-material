import React from 'react'
import {connect} from 'cerebral/react'
import {state, signal} from 'cerebral/tags'
import {
  Button
 } from 'material-ui'
import styled from 'styled-components'

const ButtonWrapper = styled.div`
  margin: 20px;
`
const SystemButton = styled(Button)`
  width: 100%;
`
export default connect({
  systemReady: state`system.status.ready`,
  systemState: state`system.status.state`,
  armAwayClicked: signal`system.armAwayClicked`,
  armStayClicked: signal`system.armStayClicked`,
  disarmClicked: signal`system.disarmClicked`
}, function NewButtonPanel({systemReady,systemState,armAwayClicked, armStayClicked, disarmClicked}) {
  const isArmed = state => state !== 'Not Armed'

  return (
    <div>
      <ButtonWrapper>
        <SystemButton
          raised color="primary"
          onClick={() => armAwayClicked({code: '1234'})}
          disabled={isArmed(systemState) || !systemReady}
        >
          Arm Away
        </SystemButton>
      </ButtonWrapper>
      <ButtonWrapper>
        <SystemButton
          raised color="primary"
          onClick={() => armStayClicked({code: '1234'})}
          disabled={isArmed(systemState) || !systemReady}
        >
          Arm Stay
        </SystemButton>
      </ButtonWrapper>
      <ButtonWrapper>
        <SystemButton
          raised color="accent"
          onClick={() => disarmClicked({code: '1234'})}
          disabled={!isArmed(systemState)}
        >
          disarm
        </SystemButton>
      </ButtonWrapper>
    </div>
  )
})