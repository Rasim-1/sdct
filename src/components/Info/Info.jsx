import React from 'react'
import "./Info.css"

const Info = () => {
  return (
   <>
   <div className="info">
    <div className="container">
        <div className="info__wrapp">
            <div className="info__img">
                <img src="/hi.svg" alt="" />
            </div>
            <div className="info__about">
                <h3>О нас</h3>
                <p>Мы первый сайт который был создан для студентов,учеников из разных школ и классов,кто собирается поступать в вузы/институты и колледжи. Здесь вы можете практически все.Практически имеем ввиду,помогать друг-другу с поступление,советоваться с нашими учителями а так же делиться опытом если вы уже поступил,потому что это поможет другим. Здесь вы так-же сможете найти информацию о IELTS и еще материалы для подготовления к IELTS.</p>
            </div>
        </div>
    </div>
   </div>
   
   
   </>
  )
}

export default Info