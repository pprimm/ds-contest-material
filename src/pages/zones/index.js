import React from 'react'
import ZonesTitleBar from '../../components/ZonesTitleBar'
import ZoneList from '../../components/ZoneList'


export default function ZonesPage() { 
  return (
    <div>
      <ZonesTitleBar />
      <div style={{height: 48}} />
      <div>
        <ZoneList />
      </div>
    </div>
  )
}