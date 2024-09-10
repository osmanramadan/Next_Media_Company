import MainBanner from '@/compenent/services/mainbanner';
import React from 'react';
import style from "./style.module.css";


export default function AnimationVideoProduction() {

  return (
    <div
      className={``}
      style={{ backgroundColor: "black", color: "white", height: "100vh" }}
    >
      <div>
        <MainBanner title={"Animation Video Production"}/>
        <div className={`flex flex-col md:flex-row ${style.txtbanner}`}>
          <div className={`${style.imagecontainer} w-full md:w-1/2`}>
            <img
              className={`mt-16 ${style.image}`}
              src={'/images/videoanimation.png'}
              width={380}
              height={200}
              alt=''
            />
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-24">
            <span className="block text-3xl font-bold">Animated videos are a professional player in your marketing campaign!</span>
            <div className="mt-3">
            We are here to help you design animated videos that achieve your goals, regardless of your business field. With over a decade of experience in this field, we guarantee you impressive results through an organized and professional process.

Our process begins with preparing a complete scenario that meets your needs and vision. Next, we choose the appropriate sound effects and determine the required voices, where we record them in a studio equipped with the latest equipment to ensure high quality. Finally, we move to the animation stage where all the elements are assembled into a professional video.

We use the latest video production software such as MAYA PRO, 3D Max, and Adobe After Effects to ensure the delivery of attractive and distinctive visual content.            </div>
          </div>
        </div>
        {/*  */}
  
      
      </div>
    </div>
  );
}
