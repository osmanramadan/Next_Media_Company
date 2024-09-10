import MainBanner from '@/compenent/services/mainbanner';
import React from 'react';
import style from "./style.module.css";


export default function ContentWrite() {

  return (
    <div
      className={``}
      style={{ backgroundColor: "black", color: "white", height: "100vh" }}
    >
      <div>
        <MainBanner title={"Social Media Management"}/>
        <div className={`flex flex-col md:flex-row ${style.txtbanner}`}>
          <div className={`${style.imagecontainer} w-full md:w-1/2`}>
            <img
              className={`mt-16 ${style.image}`}
              src={'/images/Social Media Management.png'}
              width={300}
              height={210}
              alt=''
            />
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-24">
            <span className="block text-3xl font-bold">An identity that expresses you and creates a unique space for you among your competitors</span>
            <div className="mt-2">
            Designing commercial identities is the process of creating a unique identity that distinguishes the brand from its competitors, and it is an essential element in the marketing strategy of any company or institution. Commercial identity includes a set of visual and verbal elements that express the vision and values ​​of the brand, and help build an emotional connection with the audience.
            </div>
          </div>
        </div>
        {/*  */}
  
      
      </div>
    </div>
  );
}
