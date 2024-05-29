import React from 'react'
import img from './logo.png'
import "./Navbar.css"
import { Link } from 'react-router-dom'
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
        <nav>
          <div>
            <img  className="logo" src={img} alt="" />
            </div>
            <div className='links'>
            <Link to="/signin ">Sign in</Link>
            <Link to="/signup">Sign up</Link>
            <Link to="/abuot">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/ourteam">Our Team</Link>
            <button>contact us</button>
            </div>
            <div>

            </div>
        </nav>

    </div>
  )
}

export default Navbar