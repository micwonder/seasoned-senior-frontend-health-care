'use client'

import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'
import { useState } from 'react';

import WithRightBG from '@/components/auth/WithRightBG'
import LogoImg from '@/components/auth/LogoImg'
import FormPrimaryBtn from '@/components/auth/FormPrimaryBtn'
import SocialAuth from '@/components/auth/SocialAuth';
import AuthConvert from '@/components/auth/AuthConvert';
import DistLine from '@/components/auth/DistLine';
import CreateAccount from '@/components/auth/CreateAccount'
import CongBox from '@/components/auth/CongBox';
import VerifyMailBox from '@/components/auth/VerifyMailBox';


const Signup = () => {
  const router = useRouter();
  const [showVerifyBox, setShowVerifyBox] = useState(false);
  const [showCongBox, setShowCongBox] = useState(false);
  return <>
    <WithRightBG imgpathname='/images/signup.png'>
      <LogoImg onClicked={() => router.push('/')} />
      <div className="font-arial w-[370px] mx-auto mt-[186px] sm:w-full">
        <div className='text-center'>
          <div className=' text-[32px] text-textdarkColor font-arial font-bold'>
            Create your account
          </div >
          <div className='text-base text-distlineColor font-arial font-normal mt-4 font-normal'>
            Its free and easy
          </div>
        </div>
        <div className="py-4 px-4 text-base leading-6 space-y-4 text-gray-700">
          <CreateAccount passStatus='weak' />
          <div className="relative">
            <FormPrimaryBtn onClicked={() => router.push('/selectoption')}>Create account</FormPrimaryBtn>
            {showVerifyBox &&
              <VerifyMailBox onClicked={() => setShowCongBox(true)} />
            }
            {showCongBox &&
              <CongBox onClicked={() => router.push('/')} href='#' />
            }
          </div>
          <DistLine />
          <SocialAuth onClickedGoogleBtn={() => setShowVerifyBox(true)} onClickedAppleBtn={() => setShowVerifyBox(true)} />
          <AuthConvert experssion='Already have an account' action='Sign in' href='/login' />
        </div>

      </div>
    </WithRightBG>
  </>
};

export default Signup;
