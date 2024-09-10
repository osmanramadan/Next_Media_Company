import MainBanner from '@/compenent/services/mainbanner';
import React from 'react';
import style from "./style.module.css";


export default function DesignLogo() {

  return (
    <div
      className={``}
      style={{ backgroundColor: "black", color: "white", height: "100vh" }}
    >
      <div>
        <MainBanner title={"Design Logo"}/>
        <div className={`flex flex-col md:flex-row ${style.txtbanner}`}>
          <div className={`${style.imagecontainer} w-full md:w-1/2`}>
            <img
              className={`mt-16 ${style.image}`}
              src={'/images/designlogo.png'}
              width={380}
              height={200}
              alt=''
            />
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-24">
            <span className="block text-3xl font-bold">Brand Identity Design</span>
            <div className="mt-2">
            Brand identity design is the process of creating a unique identity that sets a brand apart from its competitors, and is an essential element of any company or organization’s marketing strategy. Brand identity includes a set of visual and verbal elements that express the brand’s vision and values, and help build an emotional connection with the audience.

           The brand identity design process begins with a deep understanding of the company’s vision, mission, and target audience. Designers must research the market and analyze current trends to understand how the brand can stand out. The basic elements of brand identity include the logo, colors, fonts, and icons, all of which are used to create a consistent visual format that reflects the company’s identity.
            </div>
          </div>
        </div>
        {/*  */}
  
      
      </div>
    </div>
  );
}
