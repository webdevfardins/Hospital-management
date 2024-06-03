import React from 'react'
import imm from "./logo12.png"
import Square from './images/Square1.svg'
import LeftArrow  from './images/left-arrow.svg'
import listmenu from    './images/List Menu.svg'
import wallet from './images/wallet.svg'
import "./Sidebar.css"
import help from "./images/message-question.svg"
import menu from './images/pat.svg'
function Sidebar() {
  return (
    

        <div id="container">

        
            <aside>
                <ul >

                <li><a href="" className='log'>
                <img src={LeftArrow} id="left" alt="" />
                <span className='nav-itam'>DashBoard</span>
                <span></span>
                    </a></li>
        
                <img id='img'src={imm} alt="" />
                </ul>
                 <ul id='ul'>   
                <li><a id='a' href="">
                <img src={Square} alt="" />
                <span className='nav-itams'>Add/Edit Patient</span>
</a></li>         
                <li><a id='a' href="">

                <img src={menu} alt="" />
                    <span className='nav-itams'>Patient</span>
                    </a></li>
                    <li><a id='a' href="">
                    <img src={wallet} alt="" />
                        <span>Charges</span>
                        </a></li>
                    <li><a id='a' href="">
                    <img src={listmenu} alt="" />
                        <span className='nav-itams'>sign out</span>
                        </a></li>
                    <li><a id='a' href="">
                    <img src={help} alt="" />
                    <span className='nav-itams'>Help</span>

                    </a>
                    
                    </li>
                    
                </ul>
            </aside>
        
       
    
  
    </div>
  )
}

export default Sidebar