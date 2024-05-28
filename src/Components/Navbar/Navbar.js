import React from 'react'
import img from './logo12.png'
import "./Navbar.css"
function Navbar() {
  return (
    <div>
        <nav>
          <div>
            <img  className="logo" src={img} alt="" />
            </div>
            <div>
            <a href="/abuot">About</a>
            <a href="/services">Services</a>
            <a href="/contact">Our Team</a>
            <button>contact us</button>
            </div>
        </nav>

    </div>
  )
}

export default Navbar