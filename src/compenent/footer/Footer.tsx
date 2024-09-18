import Link from 'next/link';
import React from 'react';
import style from './footer.module.css';

export default function Footer() {
  return (
    <footer>

      <div  className={`${style.footer}`}>

      <div className={`${style.item}`}>
      <ul className="font-medium">
            <li className="flex justify-center sm:justify-start md:justify-start lg:justify-start">
            <Link href="/">
            <img src="/images/logos/logo.PNG" className={style.logo} alt="Logo" />
            </Link>
            </li>
            <li>
            <p className={style.paragraph}>
               A leading digital marketing agency since 2009, offering services in digital marketing, brand identity design, video production, web solutions, programming, and hosting.
            </p>
            </li>
          </ul>
        </div>
        <div className={`${style.item} text-start`} >
          <h2 className="mb-6 text-xl font-semibold text-gray-900 uppercase">Services</h2>
          <ul className="text-gray-500   font-medium" >
            <li className="mb-4">
              <a href="/services/videoproduction" className="hover:underline">Video Production</a>
            </li>
            <li className="mb-4">
              <a href="/services/websitedesign" className="hover:underline">Website Design And Hosting</a>
            </li>
            <li className="mb-4">
              <a href="/services/socialmediamanagement" className="hover:underline">Social Media Management</a>
            </li>
            <li className="mb-4">
              <a href="/services/designlogo" className="hover:underline">Design Logo</a>
            </li>
            <li className="mb-4">
              <a href="/services/animationvideoproduction" className="hover:underline">Animation Video Production</a>
            </li>
            <li className="mb-4">
              <a href="/services/googleads" className="hover:underline">Google Ads</a>
            </li>
            
          </ul>
        </div>

        <div className={`${style.item} text-start`}>
          <h2 className="mb-6 text-xl font-semibold text-gray-900 uppercase">Fast Links</h2>
          <ul className="text-gray-500 dark:text-gray-400 font-medium">

            <li className="mb-4">
              <a href="/contact" className="hover:underline mt-2">Contact</a>
            </li>
            <li className="mb-4">
              <a href="/about" className="hover:underline mt-2">About</a>
            </li>
            <li className="mb-4">
              <a href="/articles" className="hover:underline mt-2">Articles</a>
            </li>
            <li className="mb-4">
              <a href="/#services" className="hover:underline mt-2">Services</a>
            </li>
            <li className="mb-4">
              <a href="/privacy&policy" className="hover:underline mt-2">Privacy & Policy</a>
            </li>
          </ul>
        </div>

        <div className={`${style.item} text-start`}>
          <h2 className="mb-6 text-xl font-semibold text-gray-900 uppercase ">Contact Us</h2>
          <ul className="text-gray-500 dark:text-gray-400 font-medium">
            <li className="mb-4">
            <div>
              <i className="bi bi-geo-alt-fill" style={{ color: "#44B4EC", fontSize: "20px" }}></i>
              <span className='ml-2'>4 Tripoli Street - Abbas El Akkad - Nasr City - Cairo - Egypt</span>
            </div> 
            </li>
            <li className="mb-4">
              <div> <i className="bi bi-telephone-fill" style={{ color: "#44B4EC", fontSize: "20px" }}></i>
              <a href='tel:0100923877' className='ml-2'>0100923877</a></div>
            </li>
            <li className="mb-4">
              <div> <i className="bi bi-envelope-fill" style={{ color: "#44B4EC", fontSize: "20px" }}></i>
              <a href='mailto:osman@gmail.com' className='ml-2'>osman@gmail.com</a></div>
            </li>
            <li className="mb-4">
              <div> <i className="bi bi-whatsapp" style={{ color: "#44B4EC", fontSize: "20px" }}></i>
              <a href='https://web.whatsapp.com/' className='ml-2'>0100823766</a></div>
            </li>
          </ul>
        </div>
        

      </div>
      <div className={`flex flex-col sm:flex-row justify-center items-center mt-8 mx-2`}>
        <div className="text-sm text-white sm:text-left mx-8">
          © 2024 <a href="/" className="hover:underline">OnlineMedia</a>: All Rights Reserved
        </div>

        <div className={` md:px-3 md:py-6 py-4 px-2 bg-[#2091D3] flex justify-center rounded-md`}>
          <div className="text-center">
            <div className="flex mt-4 justify-center md:mt-0 space-x-5">
              <a href="https://www.facebook.com/" className="text-gray-400 hover:text-gray-900 dark:hover:text-white mx-2">
                <i className="bi bi-facebook w-4 h-4"></i>
              </a>
              <a href="https://discord.com/" className="text-gray-400 hover:text-gray-900 dark:hover:text-white mx-2">
                <i className="bi bi-discord w-4 h-4"></i>
              </a>
              <a href="https://x.com/home" className="text-gray-400 hover:text-gray-900 dark:hover:text-white mx-2">
                <i className="bi bi-twitter w-4 h-4"></i>
              </a>
              <a href="https://www.linkedin.com/feed/" className="text-gray-400 hover:text-gray-900 dark:hover:text-white mx-2">
                <i className="bi bi-linkedin w-4 h-4"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
 
    </footer>
  );
}
