import React from 'react';
import { Cairo } from 'next/font/google'; 
import style from './articles.module.css';
import imageone from '../../../public/images/articles/one.png'
import imagetwo from '../../../public/images/articles/two.png'
import imagethree  from '../../../public/images/articles/three.png'

import { StaticImageData } from 'next/image';
import MainBanner from '@/compenent/services/mainbanner';
import ArticleItem from '@/compenent/article/ArticleItem';


const cairo = Cairo({ subsets: ['latin'] });

interface ArticlesItemProps {
  imageSrc: StaticImageData;
  title: string;
  paragraph: string;
  link:string;
  date:string;
}

export default function Articles() {
  const items: ArticlesItemProps[] = [
    {
      imageSrc: imageone,
      title: 'Instagram Ad Display Methods',
      link:"/",
      date:"8 july 2002",
      paragraph:`There are various ways to display ads on Instagram, to suit all companies that want to market their products on Instagram.`,
    },
    {
      imageSrc:imagetwo,
      title: 'The cheapest prices for Facebook advertising packages in the best social media company',
      link:"/",
      date:"8 july 2002",
      paragraph: 'Facebook advertising packages are provided to you by the best social media company, Engaz Media',
    },
    {
      imageSrc:imagethree,
      title: 'Create sponsored ads on Facebook',
      link:"/",
      date:"8 july 2002",
      paragraph:"Creating sponsored ads on Facebook is one of the most important requirements for advertising campaigns for companies to market their products."
    }
  ];
  return (
    <div>

      <MainBanner title={"Articles"} isservice={false}/>
      

      <div className={style.main}  style={{ fontFamily: cairo.style.fontFamily }}>
      {items.map((item, index) => (
          <ArticleItem key={index} date={item.date} link={item.link} imageSrc={item.imageSrc} title={item.title} paragraph={item.paragraph} />
        ))}
      </div>
    </div>
  );
}
