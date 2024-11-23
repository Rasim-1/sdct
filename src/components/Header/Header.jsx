import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <header className="header">
        <div className="container">
            <div className="header__wrapp">
                <div className="header__logo">
                {/* <img src="" alt="" />
                 */}
                 <h2>StuDent ChaT</h2>
                </div>
                <div className="header__menu">
                <Link className='links' to={"/"}>Главная</Link>
                <Link className='links' to={"/Group"}>Группа</Link>
                <Link className='links' to={"/News"}>Новости</Link>
                <Link className='links' to={"/Teacher"}>Учителя</Link>
                <button>🌙</button>
                
                </div>
            </div>
        </div>
    </header>
    
    
    
    </>
  )
}

export default Header