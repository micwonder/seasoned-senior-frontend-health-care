'use client'

import React from 'react';
import Image from "next/image";
import Link from 'next/link';

import '@/app/globals.css';
import app_logo from "@/public/icons/app_logo.svg";
const VerifyMailBox = ({
  onClicked,
}: {
  onClicked: Function,
}) => {
  return (
    <div className="modal-overlay">
      <div className="w-[486px] h-[489px]">
        <div className="modal">
          <div className="flex items-center justify-center mt-2">
            <Image
              alt='logo'
              src={app_logo}
              className='cursor-pointer z-10 align-middle'
              width={143} height={56} priority={true} />
          </div>
          <div className='mt-6 text-center text-[24px] text-textdarkColor font-arial font-bold'>
            Verify your e-mail
          </div>
          <div className='text-sm font-arial text-textdarkColor font-bold'>
            Dear Full name,
          </div>
          <div className='text-sm font-arial text-distlineColor font-normal'>
            Thanks for signing up with seasoned senior
          </div>
          <div className="grid grid-cols-1 border-2 mx-[57px] mt-2">
            <div className=' text-center text-sm font-arial text-distlineColor font-normal mt-3'>
              Click the button below to verify your account
            </div>
            <button className=' mt-4 px-[13px] py-[10px] bg-primary rounded-[4px] mx-5 text-center text-textdarkColor 
                              text-sm  font-bold leading-5' onClick={()=>onClicked}>
              Verify e-mail
            </button>
            <div className="my-5 mx-auto w-[328px] border-b text-center text-distlineColor">
            </div>
            <div className='ml-3 text-xs leading-5 font-bold first-letter:font-arial text-distlineColor'>
              Respond in the next 60 mins.
            </div>
            <div className='ml-3 text-xs leading-5 font-normal font-arial text-distlineColor'>
              Email verification will be cancelled if you haven’t verified your account at the end of the 60 min
            </div>
          </div>
          <div className='mx-auto  mt-6 w-[300px] text-xs font-light leading-6 font-arial text-distlineColor'>
            Not sure why you received this email?
            <a href="#" className="border-b border-solid font-normal border-primary text-primary">
              Learn more
            </a>
            &nbsp; Copyright © 2023 Seasonsenior All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

VerifyMailBox.displayName = 'VerifyMailBox';

export default VerifyMailBox;
