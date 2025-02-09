import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

import { FaGreaterThan } from 'react-icons/fa';


const Account = () => {
  return (
    <div>
      {/* First Section with Tailwind Background */}
      <section className="relative h-[60vh] bg-cover bg-center bg-shop-bg">
       
        <div 
    className="flex justify-center flex-col wrapper items-center w-full h-[166.5px] bg-no-repeat bg-center gap-8" 
    style={{ backgroundImage: "url('/images/13.svg')" }}
  > <Image src="/images/29.svg" alt="" height={40.5} width={77}/>
  <h2 className="text-2xl font-bold ">Account</h2>
      <h3 className="text-md flex  items-baseline gap-1"><Link href="/">Home</Link><FaGreaterThan /><Link href="/Account">Account</Link></h3>
     
  </div>
        
      </section>

      {/* 2nd Section: Login and Register */}
      <section className="bg-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Login Column */}
            <div className="space-y-6">
              <h1 className="text-3xl font-bold ">Login</h1>
              <form className="space-y-4">
                {/* Username or Email */}
                <div>
                  <label className="block text-lg font-semibold" htmlFor="email">Username or Email Address</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>
                {/* Password */}
                <div>
                  <label className="block text-lg font-semibold" htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>
                {/* Remember Me Checkbox */}
                <div className="flex items-center">
                  <input type="checkbox" id="rememberMe" className="mr-2" />
                  <label htmlFor="rememberMe" className="text-lg">Remember Me</label>
                </div>
                {/* Login Button */}
                <button className="w-[215px] h-[64px] py-2 bg-transparent border border-black rounded-md text-black text-lg hover:bg-black hover:text-white transition">
                  Login
                </button>
                {/* Lost Password Link */}
                <div className="text-center w-[160px] h-[24px] mt-[1010] relative left-[418px]">
                  <Link href="#" className="text-lg text-blue-600 font-[24px] leading-[24px]">Lost your password?</Link>
                </div>
              </form>
            </div>

            {/* Register Column */}
            <div className="space-y-6">
              <h1 className="text-3xl font-bold">Register</h1>
              <form className="space-y-4">
                {/* Email Address */}
                <div>
                  <label className="block text-lg font-semibold" htmlFor="registerEmail">Email Address</label>
                  <input
                    type="email"
                    id="registerEmail"
                    placeholder="Enter your email"
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>
                {/* Register Information */}
                <div className="text-sm text-gray-600 space-y-2">
                  <p>
                    A link to set a new password will be sent to your email address.
                  </p>
                  <p>
                    Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
                  </p>
                </div>
                {/* Register Button */}
                <button className="w-[215px] h-[64px] py-4 bg-transparent border border-black rounded-md text-black text-lg hover:bg-black hover:text-white transition">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

   
    </div>
  )
}

export default Account
