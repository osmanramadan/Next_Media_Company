import React from 'react';
import Image, { StaticImageData } from 'next/image';
import style from './services.module.css';

interface WhyChooseUsItemProps {
  imageSrc: StaticImageData;
  title: string;
  paragraph: string;
}

export default function ServiceItem({ imageSrc, title, paragraph }: WhyChooseUsItemProps) {
  return (
    <div className={style.itemContainer}>
      <div className={style.image}>
         <Image src={imageSrc} className="rounded-full" height={150} width={140} alt={title} />
         <div className={style.imageOverlay}></div>
      </div>
      <span className={style.title}>{title}</span>
      <p className={style.paragraph}>{paragraph}</p>
      {/* <div className='flex justify-center items-center'>
  <div className='flex justify-center items-center rounded-full' style={{width:"200px",height:"40px",marginTop:"20px",fontSize:"20px",fontWeight:"bold",backgroundColor:"#425542",color:"#2091D3"}}>
    Show The service
  </div>
</div> */}

    </div>
  );
}
