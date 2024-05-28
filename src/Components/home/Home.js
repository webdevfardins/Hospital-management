import React from 'react'
import img from './img.png'
import "./Home.css"
function Home() {
  return (
    <div>
      <div className="box">
        <img className="img" src={img} alt="" />
        <p className='txt'>Our mission is to improve the health and functionality of our patients in the acute and post-acute setting with a commitment to excellence in everything that we do. We will accomplish this by providing high-quality compassionate care and exceptional service, with an emphasis on availability and accessibility.
</p>
        </div>
    </div>
  )
}

export default Home