import React from 'react'
import "./Maincontent.css"
import { PiUsers } from "react-icons/pi";
import { TbUserPlus } from "react-icons/tb";
import { PiDesktop } from "react-icons/pi";




function MainContent() {
  return (
    <div className='main-content'>
    <section class="main">
      <div class="main-top">
        <h1>Hello Evano 👋🏼,</h1>
        
      </div>
      <div class="main-container">
        <div class="card card1">
            <div>
        <PiUsers id='card-logo'/>
        </div>
        <div>
         <span>Face Sheets</span>
         <h3>95</h3>
         </div>
        </div>
        <div class="card card1">
            <div>
        <TbUserPlus id='card-logo'/>
        </div>
        <div>
         <span>Active Patients</span>
         <h3>129</h3>
         </div>
        </div>
        <div class="card">
            <div>
        <PiDesktop id='card-logo'/>
        </div>
        <div>
         <span>Inactive Patients</span>
         <h3>50</h3>
         </div>
        </div>
       
      </div>

      
    </section>
  </div>

    
  )
}

export default MainContent