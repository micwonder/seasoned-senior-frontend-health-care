'use client'

import React from 'react';
import Image from "next/image";

import '@/app/globals.css';
import eye_icon from "@/public/icons/eye_slash.svg";

const EmailLogin = () => {
  return (
    <>
      <div className="relative">
        <label className=" text-textdarkColor font-normal">E-mail or phone number</label>
        <input id="email" name="email" type="text" className="peer h-10 w-full bg-loginBtnColor text-gray-900 focus:outline-none focus:borer-rose-600 pl-5 mt-2" placeholder="Type your e-mail or phone number" />
      </div>
      <div className="relative">
        <label className="text-textdarkColor">Password</label>
        <input id="password" name="password" type="password" className="peer h-10 w-full bg-loginBtnColor text-gray-900 focus:outline-none focus:borer-rose-600 pl-5 mt-2" placeholder="************" />
        <div className="absolute inset-y-0 end-0 grid place-content-center px-5 mt-8">
          <Image alt='eye_icon' src={eye_icon} width={25} height={25} />
        </div>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-1'>
        <p className=" text-[#797979] sm:text-center text-[12px]">Must be at least 8 characters</p>
        <div className="text-right text-[12px] sm:text-center text-forgotColor hover:underline hover:text-gray-500">
          <a href="#">Forgot your password?</a>
        </div>
      </div>
    </>
  );
};

EmailLogin.displayName = 'EmailLogin';

export default EmailLogin;
