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
        title: 'No',
    },
    {
        id: 1,
        title: 'Yes',
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
                <BackBtn onClicked={() => router.push('/Registration/6')} />
            </div>
            <ProgressStatusBar completeness={5} hasBack={true} />
            <OptionalLbl />
            <div className="w-[370x] mx-auto mt-[52px] sm:w-full">
                <div className='text-center'>
                    <div className=' text-[32px] text-textdarkColor font-arial font-[700]'>
                        Additional Information
                    </div >
                    <div className='text-[16px] text-[#828282] font-arial font-[400] mt-[16px] mx-[100px]'>
                        &nbsp;&nbsp;&nbsp; Are there any cultural or religious considerations we should be aware of in providing care for the senior? 
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
            </div>
            <div className='text-center text-[16px] text-textdarkColor font-arial font-[400] mt-[24px] mx-[58px]'>
                Is there any additional information or specific requests you would like to share with us to ensure the best possible care for the senior?
            </div>
            <textarea name="detail_note" id="detail_note" cols={30} rows={10} placeholder='Leave a detailed note' 
                        className='border mx-[80px] mt-5 h-[152px]'></textarea>
            <div className='flex justify-between mx-8 mt-auto'>
                <SaveExitBtn onClicked={() => { }} />
                <ContinueBtn onClicked={() => { }} />
            </div>
        </WithRightBG>
    </>
};

export default Login;
