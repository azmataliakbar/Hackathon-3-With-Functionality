"use client"

import Image from 'next/image';
import { useState } from 'react';
import Header1 from '../components/Header1';
import Last from '../components/Footer'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="bg-gray-100 p-0">
      <Header1 />

      {/* Contact section - 1 */}
      <div className="relative w-full">
        <Image
          src="/shop11.png"
          alt="Shop Banner"
          width={1520}
          height={400}
          className="w-full h-[300px] object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <Image src="/shop1logo.png" alt="Shop1logo" width={60} height={60} className='hover:scale-150 ml-12 md:ml-16 lg:ml-16'/>
          <h1 className="text-4xl sm:text-5xl font-bold text-black hover:scale-150 hover:text-red-500">Contact</h1>
          <p className="text-lg sm:text-xl text-black font-bold hover:scale-150 hover:text-blue-500">Home &gt; Contact</p>
        </div>
      </div>
      
      <h2 className="text-4xl mt-4 text-center font-bold mb-10 text-black hover:text-red-500 hover:scale-y-150">Get In Touch With Us</h2>
      <p className="text-gray-400 font-bold px-8 sm:px-20 md:px-60 hover:text-blue-500 hover:scale-y-150 text-center">
        For more information about our product & services, please feel free to drop us an email. Our staff always be there to help you out. Do not hesitate!
      </p>
      
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 ml-4 sm:ml-20 mt-8">

        <div className="sm:w-1/3 text-left">
          <h2 className="text-xl font-bold text-black hover:text-blue-500 hover:scale-y-150 mb-2">Address</h2>
          <p className="text-gray-400 text-base font-bold hover:text-orange-500 hover:scale-y-150 mb-8">
            236 5th SE Avenue, New York NY10000, United States
          </p>

          <h2 className="text-xl font-bold mt-4 text-black hover:text-blue-500 hover:scale-y-150 mb-2">Phone</h2>
          <p className="text-gray-400 text-base font-bold hover:text-orange-500 hover:scale-y-150 mb-8">
            Mobile: +(84) 546-6789<br />
            Hotline: +(84) 456-6789
          </p>

          <h2 className="text-xl font-bold mt-4 text-black hover:text-blue-500 hover:scale-y-150 mb-2">Working Time</h2>
          <p className="text-gray-400 text-base font-bold hover:text-orange-500 hover:scale-y-150">
            Monday-Friday: 9:00 - 22:00<br />
            Saturday-Sunday: 9:00 - 21:00
          </p>
        </div>

        <form onSubmit={handleSubmit} className="sm:w-2/3 pr-4">
          <div className="mt-2">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-bold hover:text-blue-500 hover:scale-y-150">
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border border-gray-300 p-2 w-full sm:w-[500px] rounded-lg"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-bold hover:text-blue-500 hover:scale-y-150">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 p-2 w-full rounded-lg"
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="subject" className="block text-gray-700 font-bold hover:text-blue-500 hover:scale-y-150">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="border border-gray-300 p-2 w-full rounded-lg"
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="message" className="block text-gray-700 font-bold hover:text-blue-500 hover:scale-y-150">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="border border-gray-300 p-2 w-full rounded h-24 text-gray-600"
              />
            </div>
          </div>

          <div className="mt-4 mb-10">
            <button
              type="submit"
              className="border-2 font-bold border-gray-300 text-black px-20 py-2 rounded-2xl hover:bg-blue-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Shop section - 4 */}
      <div className="bg-gray-200 p-4">
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2 text-black hover:text-red-500 hover:scale-150">Free Delivery</h3>
            <p className="text-sm text-gray-500 hover:text-blue-600 hover:scale-110">For all orders over $50, consectetur adipiscing elit.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2 text-black hover:text-red-500 hover:scale-150">90 Days Return</h3>
            <p className="text-sm text-gray-500 hover:text-blue-600 hover:scale-110">If goods have problems, consectetur adipiscing elit.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2 text-black hover:text-red-500 hover:scale-150">Secure Payment</h3>
            <p className="text-sm text-gray-500 hover:text-blue-600 hover:scale-110">100% secure payment, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
      
      <Last />
    </div>
  );
}

export default ContactForm;
