"use client";

import React from "react";
import Image from "next/image";

import "@/app/globals.css";
import google_sign_icon from "/public/icons/google.svg";
import apple_sign_icon from "/public/icons/apple.svg";

const SocialAuth = ({
  onClickedGoogleBtn,
  onClickedAppleBtn,
}: {
  onClickedGoogleBtn: Function;
  onClickedAppleBtn: Function;
}) => {
  return (
    <>
      <div className="flex sm:block items-center justify-center mt-4 gap-5">
        <div className="relative">
          <button
            className="mt-5 sm:w-full tracking-wide font-semibold bg-loginBtnColor
                             text-textdarkColor w-[161px] py-4 rounded-2xl hover:bg-red-500 transition-all 
                            duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
            onClick={() => onClickedGoogleBtn}
          >
            <Image src={google_sign_icon} alt="google_icon" />
            <div className="ml-4 text-signinTextColor text-base my-1">
              Google
            </div>
          </button>
        </div>
        <div className="relative">
          <button
            className="mt-5 sm:w-full tracking-wide font-semibold bg-loginBtnColor text-textdarkColor 
                              w-[161px] py-4 rounded-2xl hover:bg-green-500 transition-all duration-300 ease-in-out flex items-center 
                              justify-center focus:shadow-outline focus:outline-none"
            onClick={() => onClickedAppleBtn}
          >
            <Image src={apple_sign_icon} alt="apple_icon" />
            <div className="ml-4 text-signinTextColor text-base my-1">
              Apple ID
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

SocialAuth.displayName = "SocialAuth";

export default SocialAuth;
