import React from 'react'
import s from './Hero.module.scss'

const Hero = () => {
  return (
   <>
   <div className={s.hero}>
    <div className="container">
        <div className={s.hero__wrapp}>
            <div className={s.hero__about}>
            <h2>Welcome to <span>StuDent ChaT</span></h2>
            <p>Product & Graphic Designer, with experience in delivering end-to-end UX/UI design for software products.</p>
            </div>
            <div className={s.hero__img}>
            <img src="/sdct-removebg-preview.png" alt="" />
            </div>
        </div>
    </div>
   </div>
   
   
   </>
  )
}

export default Hero