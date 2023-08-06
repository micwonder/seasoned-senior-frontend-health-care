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
import TimePickerCom from '@/components/auth/Registration/TimePickerCom';
import DatePickerCom from '@/components/auth/Registration/DatePickerCom';
import BackBtn from '@/components/auth/Registration/BackBtn';

const Login = () => {
    const router = useRouter();
    const [date, setDate] = useState<string>('');
    return <>
        <WithRightBG imgpathname='/images/registration_img_1.png'>
            <LogoImg onClicked={() => router.push('/')} />
            <div className='flex ml-8 mt-[145px] absolute'>
                <BackBtn onClicked={() => router.push('/Registration/5')} />
            </div>
            <ProgressStatusBar completeness={5} hasBack={true} />
            <div className="w-[370x] mx-auto mt-[52px] sm:w-full">
                <div className='text-center'>
                    <div className=' text-[32px] text-textdarkColor font-arial font-[700]'>
                        Daily Routine and Schedule
                    </div >
                    <div className='text-[16px] text-[#828282] font-arial font-[400] mt-[16px] mx-20'>
                        Please provide information about the senior&apos;s typical daily routine, including preferred waking and sleeping times, meal times, and any specific activities or routines that are important to them
                    </div>
                </div>
            </div>
            <div className='mx-[65px] pl-[40px] mt-5'>
                <div className="text-center text-[16px] font-[700] font-arial text-textdarkColor">
                    <label>Tell us about the senior routine and schedule</label>
                </div>
                <div className='mt-5 ml-4 px-7 pb-7'>
                    <p className=' text-textdarkColor text-[16px] font-[400] font-arial my-4 ml-2'>Waking Time</p>
                    <div className='grid grid-cols-3 mt-[32px] gap-7 items-center sm:grid-cols-1' >
                        <TimePickerCom title='Preferred waking time' />
                        <div className=' col-span-2'>
                            <InputField type='text' title='Note' placholder='' value={date} handleChange={setDate} />
                        </div>
                    </div>

                    <div className='mt-7'>
                        <p className=' text-textdarkColor text-[16px] font-[400] font-arial my-4 ml-2'>Sleeping Time</p>
                        <div className='grid grid-cols-3 mt-[32px] gap-7 items-center sm:grid-cols-1' >
                            <TimePickerCom title='Preferred sleeping time' />
                            <div className=' col-span-2'>
                                <InputField type='text' title='Note' placholder='' value={date} handleChange={setDate} />
                            </div>
                        </div>
                    </div>
                    <div className='mt-7'>
                        <p className=' text-textdarkColor text-[16px] font-[400] font-arial my-4 ml-2'>Meal Times</p>
                        <div className='grid grid-cols-3 mt-[32px] gap-7 items-center sm:grid-cols-1' >
                            <TimePickerCom title='Breakfast time' />
                            <TimePickerCom title='Lunch time' />
                            <TimePickerCom title='Dinner time' />
                        </div>
                        <div className='grid grid-cols-3 mt-[32px] gap-7 items-center sm:grid-cols-1' >
                            <TimePickerCom title='Snack time' />
                            <div className=' col-span-2'>
                                <InputField type='text' title='Note' placholder='' value={date} handleChange={setDate} />
                            </div>
                        </div>
                    </div>
                    <div className='mt-7'>
                        <p className=' text-textdarkColor text-[16px] font-[400] font-arial my-4 ml-2'>Activities and Routines</p>
                        <div className='grid grid-cols-3 mt-[32px] gap-7 items-center sm:grid-cols-1' >
                            <InputField type='text' title='Activity/Routine 1' placholder='Name of Activity' value={date} handleChange={setDate} />
                            <InputField type='text' title='Frequency' placholder='Daily/weekly' value={date} handleChange={setDate} />
                            <TimePickerCom title='Time of the day' />
                        </div>
                        <InputField type='text' title='Note' placholder='Leave a detailed note' value={date} handleChange={setDate} />
                        <div className='grid grid-cols-3 mt-[32px] gap-7 items-center sm:grid-cols-1' >
                            <InputField type='text' title='Activity/Routine 2' placholder='Name of Activity' value={date} handleChange={setDate} />
                            <InputField type='text' title='Frequency' placholder='Daily/weekly' value={date} handleChange={setDate} />
                            <TimePickerCom title='Time of the day' />
                        </div>
                        <InputField type='text' title='Note' placholder='Leave a detailed note' value={date} handleChange={setDate} />
                        <div className='grid grid-cols-3 mt-[32px] gap-7 items-center sm:grid-cols-1' >
                            <TimePickerCom title='Snack time' />
                            <div className=' col-span-2'>
                                <InputField type='text' title='Note' placholder='' value={date} handleChange={setDate} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-between mx-8 my-auto '>
                <SaveExitBtn onClicked={() => { }} />
                <ContinueBtn onClicked={() => router.push('/Registration/6')} />
            </div>

        </WithRightBG>
    </>
};

export default Login;
