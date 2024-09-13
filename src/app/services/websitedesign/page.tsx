import MainBanner from '@/compenent/services/mainbanner';
import React from 'react';
import style from "./style.module.css";
import Image from 'next/image';

export default function WebsiteDesign() {

  return (
    <div
      className={``}
      style={{ backgroundColor: "black", color: "white", height: "100vh" }}
    >
      <div>
        <MainBanner title={"Website Design"} isservice={true}/>
        <div className={`flex flex-col md:flex-row ${style.txtbanner}`}>
          <div className={`${style.imagecontainer} w-full md:w-1/2`}>
            <img
              className={`mt-16 ${style.image}`}
              src={'/images/websitedesign.png'}
              width={380}
              height={200}
              alt=''
            />
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-24">
            <span className="block text-3xl font-bold">Website Design</span>
            <div className="mt-2">
              We create a creatively designed, unique website made just for you.
            </div>
            <div className="flex flex-col justify-between mt-2">
              <ul className="list-unstyled">
                <li><i className="bi bi-speedometer2"> </i>Study your website content, business, and competitors.</li>
                <li><i className="bi bi-clock-history"> </i>Draw an initial plan to organize the stages of website implementation.</li>
                <li><i className="bi bi-gear"> </i>Start implementing the design in line with your brand colors.</li>
                <li><i className="bi bi-shield-lock"> </i> Follow SEO fundamentals during execution to facilitate search engine targeting.</li>
                <li><i className="bi bi-hdd"> </i>Ensure the website is compatible with all devices and mobile phones.</li>
                <li><i className="bi bi-shield-check"> </i>Ensure the website is fast, easy to use, and not complicated.</li>
                <li><i className="bi bi-database"> </i> Present the executed design to you for feedback and requested modifications.</li>
                <li><i className="bi bi-envelope"> </i> Implement the required modifications and create a backup before delivery.</li>
                <li><i className="bi bi-diagram-3"> </i>Deliver the website with instructions on how to use and update its content.</li>
              </ul>
            </div>
          </div>
        </div>
        {/*  */}
  
      
      </div>
    </div>
  );
}
