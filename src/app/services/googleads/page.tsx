import MainBanner from '@/compenent/services/mainbanner';
import React from 'react';
import style from "./style.module.css";

export default function GoogleAds() {

  return (
    <div
      className={``}
      style={{ backgroundColor: "black", color: "white", height: "100vh" }}
    >
      <div>
        <MainBanner title={"Google Ads"}/>
        <div className={`flex flex-col md:flex-row ${style.txtbanner}`}>
          <div className={`${style.imagecontainer} w-full md:w-1/2`}>
            <img
              className={`mt-16 ${style.image}`}
              src={'/images/googleads.png'}
              width={330}
              height={200}
              alt=''
            />
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-24">
            <span className="block text-3xl font-bold">Precision in targeting your potential customers!</span>
            <div className="mt-3">
             We display Google ads to customers when they use any of the Google platforms. You will only pay when customers click on the ad to visit your website or contact your business.We can show your ad in search results, display network, Google Maps, and also partner search sites in the Google advertising network, ensuring you appear in the top results and reach customers who are continuously searching for a specific product.
            </div>
          </div>
        </div>
        {/*  */}
  
      
      </div>
    </div>
  );
}
