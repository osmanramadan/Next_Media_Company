import React from 'react';
import SectionTitle from './sectiontitle';
import { Cairo } from 'next/font/google'; // Import Cairo font
import style from './services.module.css';
import imageone from '../../../public/images/seo.png';
import imagetwo from '../../../public/images/integrity.png'
import imagethree  from '../../../public/images/2w.png'
import imagefour  from '../../../public/images/3w.png'
import imagefive  from '../../../public/images/createdesigns.png'
import imagesix  from '../../../public/images/wordpress.png'
import { StaticImageData } from 'next/image';
import ServiceItem from './ServiceItem';


const cairo = Cairo({ subsets: ['latin'] });

interface ServicesItemProps {
  imageSrc: StaticImageData;
  title: string;
  paragraph: string;
}

export default function Services() {
  const items: ServicesItemProps[] = [
    {
      imageSrc: imageone,
      title: 'Innovative Video Production',
      paragraph:`Go viral for video production where you can elevate your digital marketing efforts by…`,
    },
    {
      imageSrc:imagetwo,
      title: 'Website design and hosting',
      paragraph: 'Website design and hosting is one of the most important companies that surpasses all companies and more....',
    },
    {
      imageSrc:imagethree,
      title: 'Social Media Management',
      paragraph: 'Marketing Campaign Management We gained our leadership from our ability to manage marketing campaigns through social media sites...',
    },
    {
        imageSrc:imagefour,
        title: 'Brand identity design',
        paragraph: 'An identity that expresses you and creates a unique space for you among your competitors. Designing commercial identities is the process of creating a unique identity that distinguishes...',
      },
      {
        imageSrc: imagefive,
        title: 'Animation video production',
        paragraph: 'Animated videos are a pro in your marketing campaign! We are here to help you design your animated videos...',
      },
      {
        imageSrc: imagesix,
        title: 'Google AdWords ads',
        paragraph: 'Accuracy in targeting your potential customers! At Injaz Media, we display Google ads to customers when they use any platform...',
      },
  ];
  return (
    <div>
      <SectionTitle txt="Services" />

      <div className={style.main}  style={{ fontFamily: cairo.style.fontFamily }}>
      {items.map((item, index) => (
          <ServiceItem key={index} imageSrc={item.imageSrc} title={item.title} paragraph={item.paragraph} />
        ))}
      </div>
    </div>
  );
}
