import React from 'react';
import SectionTitle from './sectiontitle';
import WhyChooseUsItem from './whyChooseUsItem';
import { StaticImageData } from 'next/image';
import imageone from '../../../public/images/seo.png';
import imagetwo from '../../../public/images/integrity.png'
// import imagethree  from '../../../public/images/takelisten.png'
// import imagefour  from '../../../public/images/committime.png'
// import imagefive  from '../../../public/images/createdesigns.png'
// import imagesix  from '../../../public/images/wordpress.png'
import style from './whychooseus.module.css'


export default function WhyChooseUs() {

  interface WhyChooseUsItemProps {
    imageSrc: StaticImageData;
    title: string;
    paragraph: string;
  }

  const items: WhyChooseUsItemProps[] = [
    {
      imageSrc: imageone,
      title: 'We are SEO experts',
      paragraph:`Getting visible in search engines is an art we are good at,
       unless your site shows up prominently in search engines;
        your potential customers will take their business to another competitor.`,
    },
    {
      imageSrc: imagetwo,
      title: 'We value integrity',
      paragraph: 'We believe in honesty, integrity and being honest with others. We will not sell you something you do not need, and we seriously follow the work process in a way that achieves your goals.',
    },
    {
      imageSrc:imageone,
      title: 'You talk, we listen',
      paragraph: 'Online Media is an online marketing agency, we strive to understand our client’s business goals first. Then all decisions are made with these goals in mind.',
    },
    {
        imageSrc:imageone,
        title: 'We are committed to deadlines and constantly interact with our clients',
        paragraph: 'We know that time is money in business, so we set realistic deadlines (for ourselves and our clients) and stick to them. We also constantly interact with clients to know the impact of the campaigns we run on their activities to improve the level of our services. To complete this interaction, we provide monthly reports on the results of these campaigns and discuss them with clients through Injaz Media.',
      },
      {
        imageSrc: imageone,
        title: 'We create amazing designs',
        paragraph: 'We have chosen innovation in design and we do not have room for ready-made designs. Our goal is to position your company as a prominent player in your industry and outperform all competitors with attractive and expressive designs through which you can address customers (current and potential).',
      },
      {
        imageSrc: imageone,
        title: 'WordPress Experts',
        paragraph: 'We build all our websites with the best content management software (CMS), which allows our clients to manage all the content on their websites from any device and add unlimited pages, posts, images, files and media, and we at Injaz Media train you for free to do this.',
      },
  ];

  return (
    <div>
      <SectionTitle txt="Why Choose Us?" />
      <div className={style.main} >
        {items.map((item, index) => (
          <WhyChooseUsItem
            key={index}
            imageSrc={item.imageSrc}
            title={item.title}
            paragraph={item.paragraph}
          />
        ))}
      </div>
    </div>
  );
}
