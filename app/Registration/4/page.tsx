'use client'

import { useRouter } from 'next/navigation'
import {useState } from 'react';

import WithRightBG from '@/components/auth/WithRightBG'
import LogoImg from '@/components/auth/LogoImg'
import OptionalLbl from '@/components/auth/Registration/OptionalLbl';
import ProgressStatusBar from '@/components/auth/Registration/ProgressStatusBar';
import InputField from '@/components/auth/Registration/InputField';
import SaveExitBtn from '@/components/auth/Registration/SaveExitBtn';
import ContinueBtn from '@/components/auth/Registration/ContinueBtn';
import BackBtn from '@/components/auth/Registration/BackBtn';
const Login = () => {
    const router = useRouter();
    const [name, setName] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [mail, setMail] = useState<string>('');
    
    return <>
        <WithRightBG imgpathname='/images/registration_img_3.png'>
            <LogoImg onClicked={() => router.push('/')} />
            <div className='flex ml-8 mt-[145px] absolute'>
                <BackBtn onClicked={() => router.push('/')} />
            </div>
            <ProgressStatusBar completeness={5} hasBack={true} />
            <OptionalLbl />
            <div className="w-[370x] mx-auto mt-[52px] sm:w-full">
                <div className='text-center'>
                    <div className=' text-[32px] text-textdarkColor font-arial font-[700]'>
                        Dietary Restrictions and Preferences
                    </div >
                    <div className='text-[16px] text-[#828282] font-arial font-[400] mt-[16px] mx-[100px]'>
                        &nbsp;&nbsp;&nbsp; Are there any specific dietary restrictions, preferences, or allergies we should be aware of?
                    </div>
                    <div className='text-[16px] text-textdarkColor font-arial font-[700] mt-[36px]'>
                        What allergies or restrictions does the person have?
                    </div>
                </div>
            </div>
            <div className='mx-[65px] pl-[40px] mt-5'>
                <div className='mt-5 ml-4 px-7 pb-7'>
                    <InputField type='text' title='List of Allergies' placholder='Milk, Tea' value={name} handleChange={setName} />
                    <div className='mt-7'>
                        <InputField type='text' title='Note' placholder='Leave a detailed note' value={mail} handleChange={setMail} />
                    </div>
                </div>
            </div>
            <div className='flex justify-between mx-8 mt-auto'>
                <SaveExitBtn onClicked={() => { }} />
                <ContinueBtn onClicked={() => { }} />
            </div>

        </WithRightBG>
    </>
};

export default Login;
