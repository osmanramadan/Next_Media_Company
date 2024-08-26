import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function ContactHeader() {

  return (
    <div
      style={{ marginLeft: "60px" }}
      className="mx-4 py-4 !bg-[#555555] rounded-md md:flex md:items-center md:justify-between"
    >
      <div className="flex justify-center items-center">
        <div className="flex items-center">
          <FontAwesomeIcon
            icon={faPhone}
            height={20}
            width={20}
            className="text-white"
          />
          <span
            className="text-white mx-2"
            style={{ fontWeight: "bold" }}
          >
            +123-456-7890
          </span>
        </div>
        <div className="flex items-center mx-2">
          <FontAwesomeIcon
            icon={faEnvelope}
            height={20}
            width={20}
            className="text-white text-[#2091D3]"
          />
          <span
            className="text-white mx-2"
            style={{ fontWeight: "bold" }}
          >
            info@onlinemedia.com
          </span>
        </div>
      </div>

      <div
        className="flex mt-4 justify-center md:mt-0 space-x-5 rtl:space-x-reverse mx-2"
      >
        <a
          href="#"
          className="text-gray-400 hover:text-white dark:hover:text-white"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 8 19"
          >
            <path
              fillRule="evenodd"
              d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
              clipRule="evenodd"
            />
          </svg>
          <span className="sr-only">Facebook page</span>
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-white dark:hover:text-white"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 21 16"
          >
            <path
              d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"
            />
          </svg>
          <span className="sr-only">Discord community</span>
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-white dark:hover:text-white"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 17"
          >
            <path
              fillRule="evenodd"
              d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
            />
          </svg>
          <span className="sr-only">Twitter page</span>
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-white dark:hover:text-white"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-1.12-5.43 10.282 10.282 0 0 1 1.636-1.226c.057.09.12.182.185.272a16.938 16.938 0 0 1 2.368 5.55 8.616 8.616 0 0 1-1.668.591ZM12 10.9c0-2.63 1.02-5.036 2.664-6.778a20.382 20.382 0 0 1 1.98 1.488A6.726 6.726 0 0 1 18 11.1a8.41 8.41 0 0 1-1.822 1.594A12.858 12.858 0 0 0 12 10.9ZM7.873 3.654a7.226 7.226 0 0 1-2.788 1.674 16.647 16.647 0 0 1 2.753 5.24C7.658 11.737 7.877 9.711 7.873 7.654A8.24 8.24 0 0 1 6.076 4.396a1.572 1.572 0 0 1-.141-.114Zm-4.304.02A7.777 7.777 0 0 0 .863 8.262 8.344 8.344 0 0 0 2.325 8.037a5.078 5.078 0 0 1 .163-.217Zm0 0"
            />
          </svg>
          <span className="sr-only">Github page</span>
        </a>
      </div>
    </div>
  )

}
