import React from 'react'
import style from './mainbanner.module.css'

export default function MainBanner({title,isservice=false,isarticle=false}:{title:String,isservice?:boolean,isarticle?:boolean}) {
    return (
      <div >
        <section className={style.main}>
            
            <div className={style.title} >{title}</div>
            <div>
             <span  className={style.subtitle}> {title} </span>
             {
              isservice&& <a href='/#services' style={{fontWeight:"700",fontSize:"12px"}} className={style.subtitle}> » Services </a>

             }
            {
              isarticle&& <a href='/articles' style={{fontWeight:"700",fontSize:"12px"}} className={style.subtitle}> » Articles </a>

             }
             <a href='/' style={{fontWeight:"700",fontSize:"12px"}} className={style.subtitle} > » Home </a>
            </div>
             
        </section>
      </div>
    );
  }
  