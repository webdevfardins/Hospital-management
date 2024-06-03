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

      <div class="main-content2">
        <div class="card">
        
        <div class="card-container">
        <h1>All Patients</h1>
          <div id='inp'>
          <i class="fa fa-magnifying-glass"></i>

          <input type="search" placeholder='search' name="" id="" />
          
          </div>
          <button> submit</button>

          <select>

        
          <option value=""> Newest</option>
        </select>
        </div>
        <div className='rows'>
        <tabel>
          <tr>
            <th>Last Name</th>
            <th>First Name</th>
            <th>DOB</th>
            <th>Hospital Location</th>
            <th>Status</th>
            <th>Face Sheet</th>
          </tr>
          <tr>
            <td>Avernathy</td>
            <td>Ann</td>
            <td>05/06/1937</td>
            <td>Southside Regional Medical Center</td>
            <td><button>Active</button></td>
            <td>   <span>yes</span></td>
          </tr>
          
          </tabel>  
          
          
        </div>
        
       
        
        </div>
        

      
      </div>
    </section>
  </div>

    
  )
}

export default MainContent