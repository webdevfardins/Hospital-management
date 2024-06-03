import React from 'react'
import img from './logo.png'
import "./Navbar.css"

import { Link } from 'react-router-dom'
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";


function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

  return (
    
        
        
        <header>
            <img className='logo'  src={img} alt="" />
          <nav ref={navRef}>
            
          
            
            
            <ul className='nav_links'>
           <li> <Link className='aclive' to="/signin ">Sign in</Link></li>
           <li> <Link to="/signup">Sign up</Link></li>
           <li> <Link to="/Patient">Patient List</Link></li>
           <li><Link to="/abuot">About</Link></li>
           <li><Link to="/services">Services</Link></li>
           <li> <Link to="/ourteam">Our Team</Link></li>
            <li><Link to=""><button >CONTACT US</button></Link></li>
            
            </ul>
            <button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			
      <div>
      <button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
      </div>
        </header>
        
        
        
    
  )
}

export default Navbar