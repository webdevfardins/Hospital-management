import React from 'react'
import img from './logo.png'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { IoIosMenu } from "react-icons/io";

function Navbar() {
  return (
    <div>
        {/* <nav>
          <div>
            <img  className="logo" src={img} alt="" />
            </div>
            <div>
            <Link to="/abuot">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Our Team</Link>
            <button>contact us</button>
            </div>
        </nav> */}
      

        
        <header>
          
         
          
            <img  className="logo" src={img} alt="" />
            
            <nav>
            <ul className='nav_links'>
           <li> <Link className='aclive' to="/signin ">Sign in</Link></li>
           <li> <Link to="/signup">Sign up</Link></li>
           <li><Link to="/abuot">About</Link></li>
           <li><Link to="/services">Services</Link></li>
           <li> <Link to="/ourteam">Our Team</Link></li>
            <li><Link to=""><button id='bt'>CONTACT US</button></Link></li>
            
            </ul>
            </nav>
            
            <div>
        
            </div>
            
        </header>
        
        
        
    </div>
  )
}

export default Navbar