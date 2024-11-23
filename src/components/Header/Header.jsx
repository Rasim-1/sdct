import React from 'react'
import s from './Header.module.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <header className={s.header}>
        <div className="container">
            <div className={s.header__wrapp}>
                <div className={s.header__logo}>
                {/* <img src="" alt="" />
                 */}
                 <h2>StuDent ChaT</h2>
                </div>
                <div className={s.header__menu}>
                <Link className={s.links} to={"/"}>Главная</Link>
                <Link className={s.links} to={"/Group"}>Группа</Link>
                <Link className={s.links} to={"/News"}>Новости</Link>
                <Link className={s.links} to={"/Teacher"}>Учителя</Link>
                <button>🌙</button>
                
                </div>
            </div>
        </div>
    </header>
    
    
    
    </>
  )
}

export default Header