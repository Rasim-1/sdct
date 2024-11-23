import React from 'react'
import s from './Why.module.scss'

const Why = () => {
  return (
   <>
       <section className={s.why_us}>
            <h1 className={s.why_us_title}>Почему именно мы?</h1>
            <div className={s.content}>
                <div className={s.item}>
                    <h2 className={s.item_title}>Способ связи</h2>
                    <p className={s.item_text}>Способ связи с учителями будет в Zoom.</p>
                </div>
                <div className={s.item}>
                    <h2 className={s.item_title}>Учителя</h2>
                    <p className={s.item_text}>У нас самые лучшие учителя, которые смогут вам помочь чем смогут.</p>
                </div>
                <div className={s.item}>
                    <h2 className={s.item_title}>Помощь 24/7</h2>
                    <p className={s.item_text}>Мы готовы вам помогать хоть даже ночью!</p>
                </div>
            </div>
            <div className={s.image}>
                <img src="/Enot.png" alt="" />
            </div>
        </section>
        
        
        
        
        <section className={s.our_users}>
            <h1 className={s.our_users_title}>Наши пользователи</h1>
            <div className={s.content_our}>
                <div className={s.item}>
                    <img className={s.item_img} src="/chart.png" alt="График" />
                    <h2 className={s.item_text_desc}>199%</h2>
                    <p className={s.item_text_decor}>Найдёте ответы на все ваши вопросы</p>
                </div>
                <div className={s.item}>
                    <img className={s.item_img} src="/laptop.png" alt="Ноутбук" />
                    <h2 className={s.item_text_desc}>200%</h2>
                    <p className={s.item_text_decor}> Наши учителя помогут вам</p>
                </div>
                <div className={s.item}>
                    <img className={s.item_img} src="/house.png" alt="" />
                    <h2 className={s.item_text_desc}>200%</h2>
                    <p className={s.item_text_decor}>Найдёте себе новых друзей</p>
                </div>
            </div>
        </section>
        
        </>
  )
}

export default Why