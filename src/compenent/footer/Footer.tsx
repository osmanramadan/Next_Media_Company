import Link from 'next/link';
import React from 'react';
import style from './footer.module.css';

export default function Footer() {
  return (
    <footer>

      <div  className={`${style.footer}`}>

      <div className={`${style.item} text-center mb-8 ml-4`}>
      <ul className="text-gray-500 dark:text-gray-400 font-medium">
            <li className="mb-4 flex justify-center">
            <Link href="/">
            <img src="/images/logos/logo2.png" className={style.logo} alt="Company Logo" />
            </Link>
            </li>
            <li className="mb-4">
            <p className={style.paragraph}>
               A leading digital marketing agency since 2009, offering services in digital marketing, brand identity design, video production, web solutions, programming, and hosting.
            </p>
            </li>
          </ul>
        </div>

        <div className={`${style.item} text-center`} style={{width:'25%'}}>
          <h2 className="mb-6 text-xl font-semibold text-gray-900 uppercase dark:text-white">Contact</h2>
          <ul className="text-gray-500 dark:text-gray-400 font-medium">
            <li className="mb-4">
              <a href="#" className="hover:underline">Link 1</a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">Link 2</a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">Link 3</a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">Link 4</a>
            </li>
          </ul>
        </div>
        
        <div className={`${style.item} text-center`} style={{width:'25%'}}>
          <h2 className="mb-6 text-xl font-semibold text-gray-900 uppercase dark:text-white">Contact</h2>
          <ul className="text-gray-500 dark:text-gray-400 font-medium">
          <li className="mb-4">
              <a href="#" className="hover:underline">Link 1</a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">Link 2</a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">Link 3</a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">Link 4</a>
            </li>
          </ul>
        </div>

        <div className={`${style.item} text-center`} style={{width:'25%'}}>
          <h2 className="mb-6 text-xl font-semibold text-gray-900 uppercase">Company</h2>
          <ul className="text-gray-500 dark:text-gray-400 font-medium">
            <li className="mb-4">
              <a href="#" className="hover:underline">Link 1</a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">Link 2</a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">Link 3</a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">Link 4</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={`flex flex-col sm:flex-row justify-center items-center mt-8`}>
        <div className="text-sm text-white sm:text-left mx-5">
          © 2024 <a href="https://flowbite.com/" className="hover:underline">OnlineMedia</a>: All Rights Reserved
        </div>

        <div className={` md:px-3 md:py-6 py-4 px-2 bg-[#2091D3] flex justify-center rounded-md`}>
          <div className="text-center">
            <div className="flex mt-4 justify-center md:mt-0 space-x-5">
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
 
    </footer>
  );
}
