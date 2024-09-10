import React from 'react';
import Image, { StaticImageData } from 'next/image';
import style from './services.module.css';

interface WhyChooseUsItemProps {
  imageSrc: StaticImageData;
  title: string;
  paragraph: string;
  link: string;
}

export default function ServiceItem({ imageSrc, title, paragraph, link }: WhyChooseUsItemProps) {
  return (
    <a href={link} className={style.itemLink}  rel="noopener noreferrer">
      <div className={style.itemContainer}>
        <div className={style.image}>
          <Image src={imageSrc} className="rounded-full" height={150} width={140} alt={title} />
          <div className={style.imageOverlay}></div>
        </div>
        <span className={style.title}>{title}</span>
        <p className={style.paragraph}>{paragraph}</p>
      </div>
    </a>
  );
}
