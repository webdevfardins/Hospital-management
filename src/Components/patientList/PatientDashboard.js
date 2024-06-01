import React from 'react'
import Sidebar from './Sidebar'
import MainContent from './MainContent'
import "./deshboard.css"
function PatientDashboard() {
  return (
    <div className='dashboard'>
        
      <Sidebar/>
      <MainContent/>
    </div>
  )
}

export default PatientDashboard