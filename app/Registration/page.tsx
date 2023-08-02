'use client'

import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'
import { useState } from 'react';

import WithRightBG from '@/components/auth/WithRightBG'
import LogoImg from '@/components/auth/LogoImg'
import FormPrimaryBtn from '@/components/auth/FormPrimaryBtn'
import ProgressStatusBar from '@/components/auth/Registration/ProgressStatusBar';
import InputField from '@/components/auth/Registration/InputField';

const Login = () => {
    const router = useRouter();
    const [showVerifyBox, setShowVerifyBox] = useState(false);
    const [showCongBox, setShowcongBox] = useState(false);

    return <>
        <WithRightBG imgpathname='/images/login.png'>
            <LogoImg onClicked={() => router.push('/')} />
            <ProgressStatusBar completeness={2} />
            <div className="w-[370px] mx-auto mt-[52px] sm:w-full">
                <div className='text-center'>
                    <div className=' text-[32px] text-textdarkColor font-arial font-[700]'>
                        Personal Information
                    </div >
                    <div className='text-[16px] text-[#828282] font-arial font-[400] mt-[16px]'>
                        Information about senior looking for care
                    </div>
                    <div className='flex justify-center  mt-6'>
                        <div className=' text-[12px] text-textdarkColor font-arial'> Are you filling this out for </div>
                        <div className='flex items-center ml-2'>
                            <input id="Yourself" type='radio' value="" name='role-radio' className='w-4 h-4 text-primary bg-white focus:ring-red-500 dark:border-distlineColor'></input>
                            <label className='ml-2 text-[12px] text-distlineColor dark:text-gray-300 font-arial'> Yourself</label>
                        </div>
                        <div className='flex items-center ml-4'>
                            <input id="Somebody" type='radio' value="" name='role-radio' className='w-4 h-4 text-primary bg-white focus:ring-primary  dark:border-distlineColor'></input>
                            <label className='ml-2 text-[12px] text-distlineColor dark:text-gray-300 font-arial'> Somebody</label>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="left-[7px] top-[38px] w-12 h-12 bg-textdarkColor rounded-full flex justify-center items-center text-center text-[36px] text-sectionBgColor shadow-xl">
                    1
                </div> */}
            <div className='mx-[65px] pl-[40px]'>
                <InputField type='text' title='Full Name of Senior' placholder='Enter Full Name' />
                <div className='grid grid-cols-2 mt-[32px] gap-7'>
                    <InputField type='date' title='Birthday' placholder='' />
                    <InputField type='text' title='Gender' placholder='Enter Full Name' />
                </div>
                <div className='mt-[32px]'>
                    <InputField type='text' title='Address' placholder='Enter Address' />
                </div>
                <div className='mt-[32px]'>
                    <InputField type='email' title='Email (optional)' placholder='Enter you Email' />
                </div>
                <div className='mt-[32px]'>
                    <InputField type='email' title='Phone (optional)' placholder='7465165196' />
                </div>
            </div>
        </WithRightBG>
    </>
};

export default Login;
