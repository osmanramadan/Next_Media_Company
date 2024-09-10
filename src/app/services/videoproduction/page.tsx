import MainBanner from '@/compenent/services/mainbanner';
import React from 'react';
import style from "./style.module.css";



export default function VideoProduction() {

  return (
    <div
      className={``}
      style={{ backgroundColor: "black", color: "white", height: "100vh" }}
    >
      <div>
        <MainBanner title={"Video Production"}/>
        <div className={`flex flex-col md:flex-row ${style.txtbanner}`}>
          <div className={`${style.imagecontainer} w-full md:w-1/2`}>
            <img
              className={`mt-16 ${style.image}`}
              src={'/images/producevideo.png'}
              width={380}
              height={200}
              alt=''
            />
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-24">
            <span className="block text-3xl font-bold">Innovative video...go viral</span>
            <div className="mt-2">
            Video Production Where you can elevate your digital marketing efforts by harnessing the power of video. We are a video production company based in Nasr City, Cairo that delivers high-quality content from start to finish. Our in-house production team can storyboard, direct and edit the most stunning visual experience to impact your audience every time.
            </div>
          </div>
        </div>
        {/*  */}
  
      
      </div>
    </div>
  );
}
