import React from 'react';
import style from "./privacyandpolicy.module.css";
import MainBanner from '@/compenent/services/mainbanner';


export default function PrivacyPolicy() {

  return (
    <div
      style={{ backgroundColor: "black", color: "white", height: "100vh",marginBottom:"auto" }}
    >
     <MainBanner title={"Privacy And Policy"} isservice={false}/>

     <div className={`flex flex-col md:flex-row ${style.txtbanner}`}>
          <div className={`md:w-1/2 mt-8 md:mt-32 ${style.imagecontainer} w-full md:w-1/2`}>
            <img
              className={`${style.image}`}
              src={'/images/privacyandpolicy.png'}
              width={400}
              height={300}
              alt=''
            />
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-32 mx-2">
            <span className="block text-3xl font-bold">What personal data do we collect and why do we collect it?</span>

            <div className="flex flex-col justify-between mt-2">
               <div  className='mt-2'>In this section, you should indicate the personal data you collect from users and visitors to the Site. This may include personal data, such as name, email address, and personal account preferences; transactional data, such as purchase information; and technical data, such as information about cookies.</div>
               <div  className='mt-2'>You should also indicate any collection or retention of sensitive personal data, such as health-related data.</div>
               <div  className='mt-3'>In addition to listing the personal data you collect, you should indicate why it is collected. These explanations should indicate either the legal basis for collecting and retaining the data, or the active consent provided by the user.</div>
               <div  className='mt-4'>Personal data is not only generated by user interactions with your Site. Personal data is also generated from technical processes such as contact forms</div>
            </div> 
          </div>
        </div>
    </div>
  );
}
