import React from 'react'
import {connect} from 'cerebral/react'
import {state} from 'cerebral/tags'
import styled from 'styled-components'

const StatusWrapper = styled.div`
  background-color: #222;
  height: 7.0rem;
  padding: 20px;
  color: white;
` 


export default connect({
  line1: state`system.display.0`,
  line2: state`system.display.1`
}, function StatusPanel({line1, line2}) {
  return (
    <StatusWrapper>
      <h2>{line1}</h2>
      <h2>{line2}</h2>
    </StatusWrapper>
  )
})