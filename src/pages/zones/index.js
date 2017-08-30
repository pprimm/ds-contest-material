import React from 'react'
import ZonesTitleBar from '../../components/ZonesTitleBar'
import FilterTabBar from '../../components/FilterTabBar'
import ZoneList from '../../components/ZoneList'


export default function ZonesPage() { 
  return (
    <div>
      <ZonesTitleBar />
      <FilterTabBar />
      <div>
        <ZoneList />
      </div>
    </div>
  )
}