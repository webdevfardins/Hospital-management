import React from 'react'
import img from './logo.png'
import "./Navbar.css"
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    
        
        
        <header>
          
         
          
            <img  className="logo" src={img} alt="" />
            
            <nav>
            <ul className='nav_links'>
           <li> <Link className='aclive' to="/signin ">Sign in</Link></li>
           <li> <Link to="/signup">Sign up</Link></li>
           <li> <Link to="/Patient">Patient List</Link></li>
           <li><Link to="/abuot">About</Link></li>
           <li><Link to="/services">Services</Link></li>
           <li> <Link to="/ourteam">Our Team</Link></li>
            <li><Link to=""><button >CONTACT US</button></Link></li>
            
            </ul>
            </nav>
            
            <div>
        
            </div>
            
        </header>
        
        
        
    
  )
}

export default Navbar