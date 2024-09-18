import React from 'react';
import style from "./about.module.css";
import MainBanner from '@/compenent/services/mainbanner';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About OnlineMedia",
  description: "A company specilized in services of hosting",
};



export default function AboutUs() {

  return (
    <div
      style={{ backgroundColor: "black", color: "white", height: "100vh",marginBottom:"auto" }}
    >
      <div>
        <MainBanner title={"About Us"} isservice={false}/>
        <div className={`flex flex-col md:flex-row ${style.txtbanner}`}>
          <div className={`${style.imagecontainer} w-full md:w-1/2`}>
            <img
              className={`${style.image}`}
              src={'/images/aboutus.png'}
              width={400}
              height={400}
              alt=''
            />
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-32 mx-2">
            <span className="block text-3xl font-bold">OnlineMedia</span>

            <div className="flex flex-col justify-between mt-3">
            Online Media is a leading digital marketing agency providing comprehensive services, specializing in digital marketing services, brand identity design, as well as web solutions, programming, and web hosting services.
            Since our inception, we have focused on excellence and creativity. We have been working for over 10 years with a qualified and experienced team consisting of marketers, designers, and developers. We have come together in the field of specialization to develop and innovate.
            </div>
          </div>
        </div>
     
      </div>
    </div>
  );
}
