import Link from 'next/link';
import React from 'react';

import Image from 'next/image';
import { FaGreaterThan } from 'react-icons/fa';

const ContactSection = () => {

    
    

  return (
    
    <>  <div 
    className="flex justify-center flex-col wrapper items-center w-full h-[166.5px] bg-no-repeat bg-center gap-8" 
    style={{ backgroundImage: "url('/images/13.svg')" }}
  > <Image src="/images/29.svg" alt="" height={40.5} width={77}/>
  <h2 className="text-2xl font-bold ">Contact</h2>
      <h3 className="text-md flex  items-baseline gap-1"><Link href="/">Home</Link><FaGreaterThan /><Link href="/contact">Contact</Link></h3>
     
  </div>
  
      {/* Contact Section */}
      <section className="bg-white ">
        <div className="container mx-auto px-4 my-12">
          {/* Heading and Paragraph */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-black">Get In Touch With Us</h1>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              For More Information About Our Product & Services, Please Feel Free To Drop Us An Email. 
              Our Staff Will Always Be There To Help You Out. Do Not Hesitate!
            </p>
          </div>

          {/* Two Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* First Column (Transparent with Dark Navy Blue Border) */}
            <div className="border-4 border-blue-900 p-8 rounded-lg space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-black">Address</h2>
                <p className="text-gray-600">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-black">Phone</h2>
                <p className="text-gray-600">
                  Mobile: +(84) 546-6789<br />
                  Hotline: +(84) 456-6789
                </p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-black">Working Time</h2>
                <p className="text-gray-600">
                  Monday-Friday: 9:00 - 22:00<br />
                  Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>

            {/* Second Column (Contact Form) */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <form className="space-y-6" >
                {/* Your Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Abc"
                    className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                    required
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Abc@def.com"
                    className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                    required
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="This is an optional"
                    className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="I'd like to ask about"
                    className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 border border-black rounded-md text-black text-lg hover:bg-black hover:text-white transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 flex bg-[#FAF4F4]   wrapper ">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Free Delivery Section */}
          <div className="bg-[#FAF4F4] p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-black">Free Delivery</h3>
            <p className="text-gray-700 mt-2">
              For all orders over $50, consectetur adipim scing elit.
            </p>
          </div>

          {/* 90 Days Return Section */}
          <div className="bg-[#FAF4F4] p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-black">90 Days Return</h3>
            <p className="text-gray-700 mt-2">
              If goods have problems, consectetur adipim scing elit.
            </p>
          </div>

          {/* Secure Payment Section */}
          <div className="bg-[#FAF4F4] p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-black">Secure Payment</h3>
            <p className="text-gray-700 mt-2">
              100% secure payment, consectetur adipim scing elit.
            </p>
          </div>

        </div>
      </div>
    </section>
      
    </>
  );
};

export default ContactSection;