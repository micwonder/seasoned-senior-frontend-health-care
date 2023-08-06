'use client'

import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'
import { useState } from 'react';

import WithRightBG from '@/components/auth/WithRightBG'
import LogoImg from '@/components/auth/LogoImg'
import FormPrimaryBtn from '@/components/auth/FormPrimaryBtn'
import EmailLogin from '@/components/auth/EmailLogin';
import SocialAuth from '@/components/auth/SocialAuth';
import AuthConvert from '@/components/auth/AuthConvert';
import DistLine from '@/components/auth/DistLine';
import VerifyMailBox from '@/components/auth/VerifyMailBox';


const Login = () => {
  const router = useRouter();

  return <>
    <WithRightBG imgpathname='/images/login.png'>
        <LogoImg onClicked={() => router.push('/')} />
        <div className="w-[370px] mx-auto mt-[186px] sm:w-full">
          <div className='text-center'>
            <div className=' text-[32px] text-textdarkColor font-arial font-[700]'>
              Welcome Back
            </div >
            <div className='text-[16px] text-[#828282] font-arial font-[400] mt-[16px]'>
              Caring for our seniors, cherishing our community.
            </div>
          </div>
          <div className="py-4 px-4 text-base leading-6 space-y-4 text-gray-700">
            <EmailLogin />
            <div className="relative">
              <FormPrimaryBtn onClicked={() => { alert("Login Btn Clicked!") }}>Sign In</FormPrimaryBtn>
            </div>
            <DistLine />
            <SocialAuth onClickedAppleBtn={()=>{}} onClickedGoogleBtn={()=>{}}/>
            <AuthConvert experssion='Don’t have an account ' action='Create account' href='/signup'/>
          </div>
          <p className="text-[12px] text-gray-600 text-center w-full">
            By creating an account you agree with our Terms of Service, Privacy Policy, and our default Notification Settings. You also agree to the &nbsp;
            <a href="#" className="border-b border-gray-500 border-dotted text-forgotColor">
              Terms of Service
            </a>
            &nbsp; and &nbsp;
            <a href="#" className="border-b border-gray-500 border-dotted text-forgotColor">
              Privacy Policy
            </a>
          </p>
        </div>
      </WithRightBG>
  </>
};

export default Login;
