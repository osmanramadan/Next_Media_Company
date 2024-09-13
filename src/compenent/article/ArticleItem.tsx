import React from 'react';
import Image, { StaticImageData } from 'next/image';
import style from './articles.module.css';

interface ArticleItemProps {
  imageSrc: StaticImageData;
  title: string;
  paragraph: string;
  link: string;
  date:string
}

export default function ArticleItem({ imageSrc, title, paragraph, link,date }: ArticleItemProps) {
  return (
    <a href={link} className={style.itemLink}  rel="noopener noreferrer">
      <div className={style.itemContainer}>
        <div className={style.image}>
          <Image src={imageSrc} style={{width:"65%"}} alt={title} />
          <div className={style.imageOverlay}></div>
        </div>
    
        <span className={style.title}>{title}</span>
        
        <div className='text-[#4B6B82]'>{date}</div>

        {/* <div className='text-[#44B4EC]'>{date}</div> */}
        <p className={style.paragraph}>{paragraph}</p>
      </div>
    </a>
  );
}
