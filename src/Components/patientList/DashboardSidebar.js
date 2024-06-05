
    import React, { useState } from 'react';
import imm from "./logo12.png"
import Square from './images/Square1.svg'
import LeftArrow  from './images/left-arrow.svg'
import listmenu from    './images/List Menu.svg'
import wallet from './images/wallet.svg'
import "./DashboardSidebar.css"
import help from "./images/message-question.svg"
import menu from './images/pat.svg'
function DashboardSidebar({children}) {



    

    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    
    return (
        <div className="container">
           <nav style={{width: isOpen ? "25%" : "80px"}} className="sidebar">
               <span className="top_section">
               <img style={{width:"30px", marginRight:"20px"}} onClick={toggle} src={LeftArrow} alt="" />
                   <span style={{display: isOpen ? "block" : "none"}} className="logo">Dashboard</span>
                   <div style={{marginLeft: isOpen ? "10px" : "0px"}} className="bars">
                    <div></div>
                      
                   </div>
               </span>
               <img  style={{display: isOpen ? "block" : "none"}} id='img'src={imm} alt="" />
                
                 <ul id='ul'>   
                <li><a id='a' href="">
                <img src={Square} alt="" />
                <span style={{display: isOpen ? "block" : "none"}} className='nav-itams'>Add/Edit Patient</span>
</a></li>         
                <li><a id='a' href="">

                <img src={menu} alt="" />
                    <span style={{display: isOpen ? "block" : "none"}} className='nav-itams'>Patient</span>
                    </a></li>
                    <li><a id='a' href="">
                    <img src={wallet} alt="" />
                        <span style={{display: isOpen ? "block" : "none"}}>Charges</span>
                        </a></li>
                    <li ><a id='a' href="">
                    <img src={listmenu} alt="" />
                        <span style={{display: isOpen ? "block" : "none"}}className='nav-itams'>sign out</span>
                        </a></li>
                    <li><a id='a' href="">
                    <img src={help} alt="" />
                    <span style={{display: isOpen ? "block" : "none"}}className='nav-itams'>Help</span>

                    </a>
                    
                    </li>
                    
                </ul>
          
               
           </nav>
           <main>{children}</main>
        </div>
      )
}


export default DashboardSidebar;