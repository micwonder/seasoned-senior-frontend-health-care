'use client'

import React from 'react';
import Image from "next/image";
import {useState} from 'react';

import '@/app/globals.css';
import eye_slash_icon from "@/public/icons/eye_slash.svg";
import eye_icon from "@/public/icons/eye.png";

const EmailLogin = () => {

  const [mypassword, setMyPassword] = useState<string>('');
  const [myemail, setMyEmail] = useState<string>('');
  const [showPassword, setshowPassword] = useState(false);

  return (
    <>
      <div className="relative">
        <label className=" text-textdarkColor font-normal">E-mail or phone number</label>
        <input id="email" name="email" type="text" className="peer h-10 w-full bg-loginBtnColor text-gray-900 focus:outline-none focus:borer-rose-600 pl-5 mt-2" placeholder="Type your e-mail or phone number" 
              onChange={(e)=>setMyEmail(e.target.value)}
        />
      </div>
      <div className="relative">
        <label className="text-textdarkColor">Password</label>
        <input id="password" name="password" type={showPassword? "text":"password"} className="peer h-10 w-full bg-loginBtnColor text-gray-900 focus:outline-none focus:borer-rose-600 pl-5 mt-2" placeholder="************" 
              onChange={(e)=>setMyPassword(e.target.value)}
        />
        <div className="absolute inset-y-0 end-0 grid place-content-center px-5 mt-8">
          <button onClick={()=>setshowPassword(!showPassword)}><Image alt='eye_icon' src={showPassword? eye_slash_icon: eye_icon} width={12} height={12} /></button>
        </div>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-1'>
        <p className=" text-[#797979] sm:text-center text-xs">Must be at least 8 characters</p>
        <div className="text-right text-xs sm:text-center text-forgotColor hover:underline hover:text-gray-500">
          <a href="/forgotpassword">Forgot your password?</a>
        </div>
      </div>
    </>
  );
};

EmailLogin.displayName = 'EmailLogin';

export default EmailLogin;
