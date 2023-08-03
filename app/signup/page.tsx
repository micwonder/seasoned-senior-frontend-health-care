'use client'

import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'

import WithRightBG from '@/components/auth/WithRightBG'
import LogoImg from '@/components/auth/LogoImg'
import FormPrimaryBtn from '@/components/auth/FormPrimaryBtn'
import EmailLogin from '@/components/auth/EmailLogin';
import SocialAuth from '@/components/auth/SocialAuth';
import AuthConvert from '@/components/auth/AuthConvert';
import DistLine from '@/components/auth/DistLine';
import CreateAccount from '@/components/auth/CreateAccount'



const Login = () => {
  const router = useRouter();
  return <>
    <WithRightBG imgpathname='/images/login.png'>
      <LogoImg onClicked={() => router.push('/')} />
      <div className="w-[370px] mx-auto mt-[186px] sm:w-full">
        <div className='text-center'>
          <div className=' text-[32px] text-textdarkColor font-arial font-[700]'>
            Create your account
          </div >
          <div className='text-[16px] text-[#828282] font-arial font-[400] mt-[16px]'>
            Its free and easy
          </div>
        </div>
        <div className="py-4 px-4 text-base leading-6 space-y-4 text-gray-700">
          <CreateAccount passStatus='weak' />
          <div className="relative">
            <FormPrimaryBtn onClicked={() => { alert("Login Btn Clicked!") }}>Create account</FormPrimaryBtn>
          </div>
          <DistLine />
          <SocialAuth />
          <AuthConvert experssion='Already have an account' action='Sign in' href = '/login' />
        </div>

      </div>
    </WithRightBG>
  </>
};

export default Login;
