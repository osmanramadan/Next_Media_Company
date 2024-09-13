import React from 'react'
import style from './mainbanner.module.css'

export default function MainBanner({title,isservice=true}:{title:String,isservice:boolean}) {
    return (
      <div >
        <section className={style.main}>
            
            <div className={style.title} >{title}</div>
            <div>
             <span  className={style.subtitle}> {title} </span>
             {
              isservice&& <a href='/#services' style={{fontWeight:"700",fontSize:"12px"}} className={style.subtitle}> » Services </a>

             }
             <a href='/' style={{fontWeight:"700",fontSize:"12px"}} className={style.subtitle} > » Home </a>
            </div>
             
        </section>
      </div>
    );
  }
  