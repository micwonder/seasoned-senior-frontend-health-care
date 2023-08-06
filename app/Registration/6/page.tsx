'use client'

import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'
import { Children, useState } from 'react';

import WithRightBG from '@/components/auth/WithRightBG'
import LogoImg from '@/components/auth/LogoImg'
import OptionalLbl from '@/components/auth/Registration/OptionalLbl';
import ProgressStatusBar from '@/components/auth/Registration/ProgressStatusBar';
import SaveExitBtn from '@/components/auth/Registration/SaveExitBtn';
import ContinueBtn from '@/components/auth/Registration/ContinueBtn';
import BackBtn from '@/components/auth/Registration/BackBtn';
import ComMethodSel from '@/components/auth/Registration/ComMethodSel';
type comMethodDataType = {
    id: number,
    title: string,
};

const comMethodData: comMethodDataType[] = [
    {
        id: 0,
        title: 'Phone call',
    },
    {
        id: 1,
        title: 'Text message',
    },
    {
        id: 2,
        title: 'E-mail',
    },
    {
        id: 3,
        title: 'In person Meetings',
    },
    {
        id: 4,
        title: 'Virtual Meeting',
    },
]
const Login = () => {
    const router = useRouter();
    const [name, setName] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [mail, setMail] = useState<string>('');
    const [selectedComMethodID, setComMethodId] = useState<number>(1);
    return <>
        <WithRightBG imgpathname='/images/registration_img_3.png'>
            <LogoImg onClicked={() => router.push('/')} />
            <div className='flex ml-8 mt-[145px] absolute'>
                <BackBtn onClicked={() => router.push('/Registration/5')} />
            </div>
            <ProgressStatusBar completeness={5} hasBack={true} />
            <OptionalLbl />
            <div className="w-[370x] mx-auto mt-[52px] sm:w-full">
                <div className='text-center'>
                    <div className=' text-[32px] text-textdarkColor font-arial font-[700]'>
                        Communication and Family Involvement
                    </div >
                    <div className='text-[16px] text-[#828282] font-arial font-[400] mt-[16px] mx-[100px]'>
                        &nbsp;&nbsp;&nbsp; How would you prefer to stay informed about the senior&apos;s well-being and care updates? (Choose one or specify any additional preferences)
                    </div>
                    <div className='text-[16px] text-textdarkColor font-arial font-[700] mt-[36px]'>
                        Choose preferred method of communication
                    </div>
                </div>
            </div>
            <div className='mx-[65px] pl-[40px] mt-5'>
                {
                    comMethodData.map((item, index) => (
                        <ComMethodSel
                            key={index.toString()}
                            title={item.title}
                            status={item.id === selectedComMethodID ? true : false}
                            onClick={(e) => {
                                if (e.type === 'click' && e.clientX !== 0 && e.clientY !== 0) {
                                    setComMethodId(item.id);
                                }
                            }}
                        />
                    ))
                }
                <div className='mt-5 flex justify-between items-center border border-textdarkColor rounded-[8px] p-[8px] cursor-pointer'>
                    <p className='text-[14px] font-arial font-[400] leading-5 text-textdarkColor'>
                        Others <span className=' text-distlineColor'> (Please specify) </span>
                    </p>
                </div>
            </div>
            <div className='flex justify-between mx-8 mt-auto'>
                <SaveExitBtn onClicked={() => { }} />
                <ContinueBtn onClicked={() => router.push('/Registration/7')} />
            </div>

        </WithRightBG>
    </>
};

export default Login;
