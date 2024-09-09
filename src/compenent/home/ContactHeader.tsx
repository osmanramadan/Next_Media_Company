import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import style from './contactheader.module.css'


export default function ContactHeader() {
  const iconStyle = {
    transition: 'color 0.3s ease'
  };

  const iconHoverStyle = {
    color: 'red'
  };

  return (
    <div
      className={`py-4  rounded-md ${style.main}`}
    >
      <div style={{width:"50%"}}  className={`mx-2 ${style.contact}`}>

        <div className="flex items-center  mx-2">
          <FontAwesomeIcon icon={faPhone} height={20} width={20} />
          <a href="tel:+1234567890" className="mx-2" style={{ fontWeight: "bold" }}>
            +1234567890
          </a>
        </div>
        <div className="flex items-center mx-2">
          <FontAwesomeIcon icon={faEnvelope} height={20} width={20} />
          <a href="mailto:info@onlinemedia.com" className="mx-2" style={{fontWeight: "bold" }}>
            info@onlinemedia.com
          </a>
        </div>
      </div>
      

      <div   className={`${style.main}`} style={{paddingRight:"40px"}}>

        <div className="bg-[#2091D3] mx-2">
          
            <div className="flex mt-4 md:mt-0 ">

              <a href="#" className="text-gray-400  mx-2">
                <i className="bi bi-facebook w-4 h-4"></i>
              </a>

              <a href="#" className="text-gray-400  mx-2">
                <i className="bi bi-discord w-4 h-4"></i>
              </a>

              <a href="#" className="text-gray-400 mx-2">
                <i className="bi bi-twitter w-4 h-4"></i>
              </a>

              <a href="#"  className="text-gray-400 mx-2">
                <i className="bi bi-linkedin w-4 h-4"></i>
              </a>
              
            </div>
        </div>

      </div>
    </div>
  );
}
