import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function ContactHeader() {
  return (
    <div
      className="mx-2 py-4 flex flex-row  justify-end items-between rounded-md"
      style={{ marginLeft: "60px" }}
    >
      {/* Contact information section - Left side */}
      <div className="flex justify-center items-center w-50%  mb-4 md:mb-0" style={{width:"50%"}}>
        <div className="flex items-center mx-2">
          <FontAwesomeIcon icon={faPhone} height={20} width={20} />
          <span className="mx-2" style={{ fontWeight: "bold" }}>
            +123-456-7890
          </span>
        </div>
        <div className="flex items-center mx-2">
          <FontAwesomeIcon icon={faEnvelope} height={20} width={20} />
          <span className="mx-2" style={{ fontWeight: "bold" }}>
            info@onlinemedia.com
          </span>
        </div>
      </div>
      

      {/* Social media section - Right side */}
      <div  style={{backgroundColor:"red",width:"50%"}}>

        <div style={{backgroundColor:"blue",width:"25%"}} className="md:px-3 md:py-6  py-4 px-2 bg-[#2091D3]  rounded-md">

            <div className="flex mt-4 md:mt-0 ">

              <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white mx-2">
                <i className="bi bi-facebook w-4 h-4"></i>
              </a>

              <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white mx-2">
                <i className="bi bi-discord w-4 h-4"></i>
              </a>

              <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white mx-2">
                <i className="bi bi-twitter w-4 h-4"></i>
              </a>

              <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white mx-2">
                <i className="bi bi-linkedin w-4 h-4"></i>
              </a>
              
            </div>
        </div>
      </div>
    </div>
  );
}
