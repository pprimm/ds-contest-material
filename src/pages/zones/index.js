import React from 'react'
import ZonesTitleBar from '../../components/ZonesTitleBar'
import ZoneList from '../../components/ZoneList'
import styled from 'styled-components'

const Positioner = styled.div`
  height: 48px
`

export default function ZonesPage() { 
  return (
    <div>
      <ZonesTitleBar />
      <Positioner />
      <div>
        <ZoneList />
      </div>
    </div>
  )
}