import React from 'react'
import s from './Help.module.scss'

const Help = ({}) => {
  return (
   <>
 
   <section className={s.services}>
                <h1 className={s.services_title}>Чем мы можем помочь вам?</h1>
                <div className={s.service_cards}>
                    <div className={s.service_card}>
                        <img className={s.service_img} src="/Colleg.JPG" alt="Помощь при поступлении" />
                        <h2 className={s.service_title}>Помощь при поступлении</h2>
                        <p className={s.service_text}>Вы можете оставлять свою информацию про поступления, как и куда можно будет поступить. А также, если у вас есть ответы на экзамены, вы можете поделиться именно здесь.</p>
                    </div>
                    <div className={s.service_card}>
                        <img className={s.service_img} src="/Comit.JPG" alt="Общение с другими людьми" />
                        <h2 className={s.service_title}>Общение с другими людьми</h2>
                        <p className={s.service_text}>С помощью общения с другими людьми, вы можете узнавать для себя очень много нового. Если у вас нет друзей, подходящих для вас, то вы можете найти их здесь. Главное соблюдайте приличие и никого не оскорбляйте!</p>
                    </div>
                    <div className={s.service_card}>
                        <img className={s.service_img} src="/learn.JPG" alt="Поступления в колледжи" />
                        <h2 className={s.service_title}>Поступления в колледжи</h2>
                        <p className={s.service_text}>Помимо студентов, здесь могут быть ученики из разных школ. Тут вам смогут помочь и с поступлением в колледж. Главное соблюдайте субординацию и никого не оскорбляйте!</p>
                    </div>
                </div>
        </section>
   
   
   
   </>
  )
}

export default Help