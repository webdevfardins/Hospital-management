import React from 'react'

import MainContent from './MainContent'
import "./dashboard.css"
import DashboardSidebar from './DashboardSidebar'
function Dashboard() {
  return (
    <div className='dashboard'>
        <DashboardSidebar/>
      
      {/* <MainContent/> */}
    </div>
  )
}

export default Dashboard