import React from 'react'
import AppWrapper from '../../components/AppWrapper'
import ZonesTitleBar from '../../components/ZonesTitleBar'
import ZoneList from '../../components/ZoneList'

export default function ZonesPage() { 
  return (
    <AppWrapper>
      <ZonesTitleBar />
      <ZoneList />
    </AppWrapper>
  )
}