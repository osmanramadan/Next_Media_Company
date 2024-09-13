import ContactForm from '@/compenent/contact/ContactForm'
import MainBanner from '@/compenent/services/mainbanner'
import React from 'react'


export default function page() {
  return (
    <div>  
      <MainBanner title={'Contact US'} isservice={false}/>
      
      <div className="text-center mt-20 mb-5">
 
        <div className='mt-4'>
          {/* Address with Bootstrap Icon */}
          <i className="bi bi-geo-alt-fill" style={{ color: "#44B4EC", fontSize: "20px" }}></i>
          <span className='ml-2'>4 Tripoli Street - Abbas El Akkad - Nasr City - Cairo - Egypt</span>
        </div>

        <div className='mt-2 p-0'>
          {/* Phone with Bootstrap Icon */}
          <i className="bi bi-telephone-fill" style={{ color: "#44B4EC", fontSize: "20px" }}></i>
          <a href='tel:0100923877' className='ml-2'>0100923877</a>
        </div>

        <div className='mt-2'>
          {/* Email with Bootstrap Icon */}
          <i className="bi bi-envelope-fill" style={{ color: "#44B4EC", fontSize: "20px" }}></i>
          <a href='mailto:osman@gmail.com' className='ml-2'>osman@gmail.com</a>
        </div>
      </div>
        
      <ContactForm/>
      
      <div style={{marginTop:"70px",padding: "10px" }} className='flex justify-center ' >
        <iframe className='sm:w-[60%] w-[100%] rounded-xl' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d51223.17555922387!2d31.334133000000005!3d30.058431!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583e6b5ab7b8a5%3A0x328b06a8cde57c6a!2sAbbas%20El-Akkad%20St!5e1!3m2!1sen!2sus!4v1726235167005!5m2!1sen!2sus" height="350"   loading="lazy" ></iframe>
     </div>
  

    </div>
  )
}
