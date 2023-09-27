'use client'

import React from 'react';
import Image from "next/image";
import Link from 'next/link';

import '@/app/globals.css';
import app_logo from "@/public/icons/app_logo.svg";
const CongBox = ({
    href,
    onClicked,
}: {
    href: string,
    onClicked: Function
}) => {
    return (
        <div className="modal-overlay">
            <div className="w-[486px] h-[335px]">
                <div className="modal">
                <div className="flex items-center justify-center mt-2">
                    <Image
                        alt='logo'
                        src={app_logo} 
                        className='cursor-pointer z-10 align-middle'
                        width={143} height={56} priority={true} />
                </div>
                    <div className='w-[299px] mt-8 mx-auto text-center text-[24px] font-arial font-bold leading-5'>
                        Congratulation, your account has been created successfully
                    </div>
                    <div className=' mt-4 text-center text-xs font-arial text-primary font-bold leading-3' onClick={()=>onClicked}>
                        Go back to browser to access dashboard
                    </div>
                    <div className="my-8 mx-auto w-[328px] border-b text-center text-textdarkColor">
                    </div>
                    <div className='mx-auto mt-6 w-[270px] text-xs font-light leading-6 font-arial text-textdarkColor'>
                        Not sure why you received this email?
                        <a href={href} className="border-b border-solid font-normal border-primary text-primary">
                            Learn more
                        </a>
                        &nbsp; Copyright © 2023 Seasonsenior All rights reserved.
                    </div>
                </div>
            </div>
        </div>
    );
};

CongBox.displayName = 'CongBox';

export default CongBox;
