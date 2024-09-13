"use client"

import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData.name,'1');
    console.log(formData.email,'2');
    console.log(formData.message,'3');
  };

  return (
    <div className="mx-2 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        style={{color:"gray"}}

        className="w-full md:w-1/2 lg:w-1/2  rounded-lg"
      >

        <div className="mb-4">
          <input
            // style={{border:"none"}}
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full  py-2 mt-1 rounded-md text-center"
          />
        </div>

        <div className="mb-4 mt-2">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 mt-1  rounded-md text-center"
          />
        </div>

        <div className="mb-4 mt-2">
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 mt-1  rounded-md text-center focus:border-none"
            rows={4}
          ></textarea>
        </div>
        <button
          type="submit"
          style={{backgroundColor:"#44B4EC",color:"white",height:"35px"}}
          className="w-full h-4 font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
         >
         Send Message
        </button>

      </form>
    </div>
  );
};

export default ContactForm;
