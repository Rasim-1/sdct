import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
   <>
   <div className="hero">
    <div className="container">
        <div className="hero__wrapp">
            <div className="hero__about">
            <h2>Welcome to <span>StuDent ChaT</span></h2>
            <p>Product & Graphic Designer, with experience in delivering end-to-end UX/UI design for software products.</p>
            </div>
            <div className="hero__img">
            <img src="/sdct-removebg-preview.png" alt="" />
            </div>
        </div>
    </div>
   </div>
   
   
   </>
  )
}

export default Hero