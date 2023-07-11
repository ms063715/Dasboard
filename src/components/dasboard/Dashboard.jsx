import React from 'react'
import Topbar from '../topbar/Topbar'
import Sidebar from '../sidebar/Sidebar'
import './dashboard.css'
import FeaturedInfo from '../featuredInfo/FeaturedInfo'
import Chart from '../chart/Chart'
import Pichart from '../pichart/Pichart'

export default function Dashboard(){
  return (
    <div>
      <div className='containerDashboard'>
          <Sidebar/>
        <div className='othersDashboard'>
          <Topbar />
          <FeaturedInfo />
          <Chart />
          <Pichart />
        </div>
    </div>
    </div>
  )
}
