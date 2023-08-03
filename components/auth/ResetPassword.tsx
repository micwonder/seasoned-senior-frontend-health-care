'use client'

import React from 'react';
import {useState} from 'react';

import '@/app/globals.css';

const ResetPassword = () => {

  const [myemail, setMyEmail] = useState<string>('');

  return (
    <>
      <div className="relative">
        <label className=" text-textdarkColor font-normal">E-mail or phone number</label>
        <input id="email" name="email" type="text" className="peer h-10 w-full bg-loginBtnColor text-gray-900 focus:outline-none focus:borer-rose-600 pl-5 mt-2" placeholder="Type your e-mail or phone number" 
              onChange={(e)=>setMyEmail(e.target.value)}
        />
      </div>
    </>
  );
};

ResetPassword.displayName = 'ResetPassword';

export default ResetPassword;
