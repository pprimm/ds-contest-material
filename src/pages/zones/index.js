import React from 'react'
import ZonesTitleBar from '../../components/ZonesTitleBar'
import ZoneList from '../../components/ZoneList'
import styled from 'styled-components'

const ZoneListWrapper = styled.div`
  margin-top: 100px
`

export default function ZonesPage() { 
  return (
    <div>
      <ZonesTitleBar />
      <ZoneListWrapper>
        <ZoneList />
      </ZoneListWrapper>
    </div>
  )
}