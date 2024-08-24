import React from 'react';
import Image, { StaticImageData } from 'next/image';
import style from './whychooseus.module.css';

interface WhyChooseUsItemProps {
  imageSrc: StaticImageData;
  title: string;
  paragraph: string;
}

export default function WhyChooseUsItem({ imageSrc, title, paragraph }: WhyChooseUsItemProps) {
  return (
    <div className={style.itemContainer}>
      <div className={style.image}>
         <Image src={imageSrc} className="rounded-full" height={150} width={140} alt={title} />
         <div className={style.imageOverlay}></div>
      </div>
      <span className={style.title}>{title}</span>
      <p className={style.paragraph}>{paragraph}</p>
    </div>
  );
}
