"use client";
import React from 'react';
import SectionTitle from './sectiontitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import imageone from '../../../public/images/logos/donboscocairo.org_.webp'
import imagetwo from '../../../public/images/logos/52154156456.webp'
import imagethree  from '../../../public/images/logos/525.webp'
import imagefour  from '../../../public/images/logos/52656.webp'
import imagefive  from '../../../public/images/logos/ESPOCRM-150x150.webp'
import imagesix  from '../../../public/images/logos/Godaddy-150x150.webp'
import imageseven  from '../../../public/images/logos/Homein-logo.webp'
import imagenine  from '../../../public/images/logos/SAMTRAC-INC.-1.png'
import imageten  from '../../../public/images/logos/donboscocairo.org_.webp'
import image_eleven  from '../../../public/images/logos/festival-3.webp'
import Image from 'next/image';





export default function Services() {

    
const customerImages = [
    imageone,
    imagetwo,
    imagethree,
    imagefour,
    imagefive,
    imagesix,
    imageseven,
    imagenine,
    imageten,
    image_eleven

  ];
 
  return (
    <div className='mb-4'>
      <SectionTitle txt="Our Customers" />

      <Swiper
        spaceBetween={5}
        slidesPerView={5}
        pagination={{ clickable: true }}
        navigation
        loop
        autoplay={{ delay: 3000 }}
      >
        {customerImages.map((image, index) => (
          <SwiperSlide key={index}>
            <Image src={image} alt={`Customer ${index + 1}`} className='rounded-full'  width={180} height={180}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
