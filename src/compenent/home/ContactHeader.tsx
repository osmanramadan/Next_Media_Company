import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import style from './contactheader.module.css'
import Link from 'next/link';


export default function ContactHeader() {


  return (
    <div
      className={`py-5  rounded-md  ${style.main}`}
    >
      <div style={{width:"50%"}}  className={`mx-2  ${style.contact}`}>

        <div className="flex items-center  mx-2">
          <FontAwesomeIcon icon={faPhone} height={20} width={20} />
          <Link href="tel:+1234567890" className="mx-2" style={{ fontWeight: "bold" }}>
            +1234567890
          </Link>
        </div>
        <div className="flex items-center mx-2">
          <FontAwesomeIcon icon={faEnvelope} height={20} width={20} />
          <Link href="mailto:info@onlinemedia.com" className="mx-2" style={{fontWeight: "bold" }}>
            info@onlinemedia.com
          </Link>
        </div>
      </div>
      

      <div   className={`${style.main} mb-2`} style={{paddingRight:"40px"}}>

        <div className="bg-[#2091D3] mx-2">
          
            <div className="flex mt-4 md:mt-0 ">

              <a href="https://www.facebook.com/"  className="text-gray-400  mx-2">
                <i className="bi bi-facebook w-4 h-4" ></i>
              </a>

              <a href="https://discord.com/" className="text-gray-400  mx-2">
                <i className="bi bi-discord w-4 h-4"></i>
              </a>

              <a href="https://x.com/home" className="text-gray-400 mx-2">
                <i className="bi bi-twitter w-4 h-4"></i>
              </a>

              <a href="https://www.linkedin.com/feed/"  className="text-gray-400 mx-2">
                <i className="bi bi-linkedin w-4 h-4"></i>
              </a>
              
            </div>
        </div>

      </div>
    </div>
  );
}
