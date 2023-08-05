'use client'

import React from 'react';
import Image from "next/image";

import '@/app/globals.css';
import google_sign_icon from '/public/icons/google.svg';
import apple_sign_icon from '/public/icons/apple.svg';

const SocialAuth = (
  {
    onClickedGoogleBtn,
    onClickedAppleBtn,
  }:
  {
    onClickedGoogleBtn: Function
    onClickedAppleBtn: Function
  }) => {
  return (
    <>
      <div className="flex sm:block items-center justify-center mt-[16px] gap-5">
        <div className="relative">
          <button className="mt-5 sm:w-full tracking-wide font-semibold bg-loginBtnColor
                             text-textdarkColor w-[161px] py-4 rounded-lg hover:bg-red-500 transition-all 
                            duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                            onClick={()=>onClickedGoogleBtn}>
            <Image src={google_sign_icon} alt='google_icon' />
            <div className="ml-4 text-signinTextColor text-[16px] my-1">
              Google
            </div>
          </button>
        </div>
        <div className="relative">
          <button className="mt-5 sm:w-full tracking-wide font-semibold bg-loginBtnColor text-textdarkColor 
                              w-[161px] py-4 rounded-lg hover:bg-green-500 transition-all duration-300 ease-in-out flex items-center 
                              justify-center focus:shadow-outline focus:outline-none"
                              onClick={()=>onClickedAppleBtn}>
            <Image src={apple_sign_icon} alt='apple_icon' />
            <div className="ml-4 text-signinTextColor text-[16px] my-1">
              Apple ID
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

SocialAuth.displayName = 'SocialAuth';

export default SocialAuth;
