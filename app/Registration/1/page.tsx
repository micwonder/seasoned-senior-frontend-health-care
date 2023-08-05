'use client'

import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'
import { Children, useState } from 'react';

import WithRightBG from '@/components/auth/WithRightBG'
import LogoImg from '@/components/auth/LogoImg'
import ProgressStatusBar from '@/components/auth/Registration/ProgressStatusBar';
import InputField from '@/components/auth/Registration/InputField';
import SaveExitBtn from '@/components/auth/Registration/SaveExitBtn';
import ContinueBtn from '@/components/auth/Registration/ContinueBtn';
import GenderSelection from '@/components/auth/Registration/GenderSelection';
import Relationship from '@/components/auth/Registration/RelationshipSelection';

const Login = () => {
    const router = useRouter();
    const [isYourself, setIsYourself] = useState<boolean>(true);
    const [name, setName] = useState<string>('');
    const [date, setDate] = useState<string>('');
    const [gender, setGender] = useState<string>('');
    const [relationship, setRelationship] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [mail, setMail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');

    const [emergencyName, setEmergencyName] = useState<string>('');
    const [emergencyAddress, setEmergencyAddress] = useState<string>('');
    const [emergencyMail, setEmergencyMail] = useState<string>('');
    const [emergencyPhone, setEmergencyPhone] = useState<string>('');
    const [formIndex, setFormIndex] = useState<number>(1);

    return <>
        <WithRightBG imgpathname='/images/registration_img_1.png'>
            <LogoImg onClicked={() => router.push('/')} />
            <ProgressStatusBar completeness={5} hasBack={false}/>
            <div className="w-[370x] mx-auto mt-[52px] sm:w-full">
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
                            <input id="Yourself" type='radio' value="" name='role-radio' className='w-4 h-4 text-primary bg-white focus:ring-red-500 dark:border-distlineColor'
                                onChange={() => setIsYourself(!isYourself)}
                            />
                            <label className='ml-2 text-[12px] text-distlineColor dark:text-gray-300 font-arial'> Yourself</label>
                        </div>
                        <div className='flex items-center ml-4'>
                            <input id="Somebody" type='radio' value="" name='role-radio' className='w-4 h-4 text-primary bg-white focus:ring-primary  dark:border-distlineColor'
                                onChange={() => setIsYourself(!isYourself)}
                            />
                            <label className='ml-2 text-[12px] text-distlineColor dark:text-gray-300 font-arial'> Somebody</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mx-[65px] pl-[40px] mt-5' onFocus={() => setFormIndex(1)}>
                <div className="flex items-center gap-x-2">
                    <span className={`left-[7px] top-[38px] w-8 h-8 border border-1 ${formIndex == 1 ? 'bg-textdarkColor text-sectionBgColor border-textdarkColor' : 'bg-white text-distlineColor border-distlineColor'} rounded-full flex justify-center items-center text-center`}>1</span>
                    <label>General Information</label>
                </div>
                <div className='mt-5 ml-4 px-7 pb-7 border-l-2 border-distlineColor'>
                    <InputField type='text' title='Full Name of Senior' placholder='Enter Full Name' value={name} handleChange={setName} />
                    <div className='grid grid-cols-2 mt-[32px] gap-7 items-center sm:grid-cols-1' >
                        <InputField type='date' title='Birthday' placholder='' value={date} handleChange={setDate} />
                        <GenderSelection />
                    </div>
                    <div className='mt-7'>
                        <InputField type='text' title='Address' placholder='Enter Address' value={address}
                            handleChange={setAddress} />
                    </div>
                    {
                        !isYourself && (
                            <div className='mt-7'>
                                <Relationship />
                            </div>
                        )
                    }
                    <div className='mt-7'>
                        <InputField type='email' title='Email (optional)' placholder='Enter you Email' value={mail} handleChange={setMail} />
                    </div>
                    <div className='mt-7'>
                        <InputField type='text' title='Phone (optional)' placholder='7465165196' value={phone}
                            handleChange={setPhone} />
                    </div>
                </div>
            </div>
            <div className='mx-[65px] pl-[40px] mt-5' onFocus={() => setFormIndex(2)}>
                <div className="flex items-center gap-x-2">
                    <span className={`left-[7px] top-[38px] w-8 h-8 border border-1 ${formIndex == 2 ? 'bg-textdarkColor text-sectionBgColor border-textdarkColor' : 'bg-white text-distlineColor border-distlineColor'} rounded-full flex justify-center items-center text-center`}>2</span>
                    <label>Emergency Contact (optional)</label>
                </div>
                <div className='mt-5 ml-4 px-7 pb-7 border-l-2 border-distlineColor'>
                    <InputField type='text' title='Full Name of Contract' placholder='Enter Full name' value={emergencyName} handleChange={setEmergencyName} />
                    <div className='mt-7'>
                        <InputField type='text' title='Address' placholder='Enter Address' value={emergencyAddress}
                            handleChange={setEmergencyAddress} />
                    </div>
                    <div className='mt-7'>
                        <InputField type='email' title='Email (optional)' placholder='Enter you Email' value={emergencyMail} handleChange={setEmergencyMail} />
                    </div>
                    <div className='mt-7'>
                        <InputField type='text' title='Phone (optional)' placholder='7465165196' value={emergencyPhone}
                            handleChange={setEmergencyPhone} />
                    </div>
                </div>
            </div>
            <div className='mx-[90px] text-primary text-[16px] font-arial font-[700]'>
                Add another Emergency Contact +
            </div>
            <div className='flex justify-between mx-8 my-auto '>
                <SaveExitBtn onClicked={() => {}} />
                <ContinueBtn onClicked={() => router.push('/Registration/2')} />
            </div>

        </WithRightBG>
    </>
};

export default Login;
