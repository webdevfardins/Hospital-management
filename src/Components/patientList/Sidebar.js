import React from 'react'
import imm from "./logo12.png"
import { LuChevronLeftCircle } from "react-icons/lu";
import { IoCubeOutline } from "react-icons/io5";
import { PiUserSquareLight } from "react-icons/pi";
import { CiWallet } from "react-icons/ci";
import { TiKeyOutline } from "react-icons/ti";
import { GrStatusUnknown } from "react-icons/gr";
import "./patientList.css"

function Sidebar() {
  return (
    

        <div>

        <div >
            <nav id='nav'>
                <ul>

                <li><a href="" className='log'>
                <LuChevronLeftCircle />
                <span className='nav-itams'>DashBoard</span>
                    </a></li>
        
                <img id='img'src={imm} alt="" />
                </ul>
                 <ul id='ul'>   
                <li><a id='a' href="">
                <IoCubeOutline id='logos'/>
                <span className='nav-itams'>Add/Edit Patient</span>
</a></li>         
                <li><a id='a' href="">

                    <PiUserSquareLight id='logos'/>
                    <span className='nav-itams'>Patient</span>
                    </a></li>
                    <li><a id='a' href="">
                        <CiWallet id='logos'/>
                        <span>Charges</span>
                        </a></li>
                    <li><a id='a' href="">
                        <TiKeyOutline id='logos'/>
                        <span className='nav-itams'>sign out</span>
                        </a></li>
                    <li><a id='a' href="">
                    <GrStatusUnknown id='logos'/>
                    <span className='nav-itams'>Help</span>

                    </a>
                    
                    </li>
                    
                </ul>
            </nav>
        </div>
       
    
  
    </div>
  )
}

export default Sidebar