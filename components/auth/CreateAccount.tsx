'use client'

import React, { useState } from 'react';
import Image from "next/image";

import '@/app/globals.css';
import eye_icon from "@/public/icons/eye_slash.svg";

type StrengthListType = {
    [key: string]: {
        icon: string;
        color: string;
    };
};


const CreateAccount = ({
    passStatus,
}: {
    passStatus: string
}) => {
    const strengthList: StrengthListType = {
        'weak': { 'icon': "icons/pass_weak.svg", 'color': 'text-primary' },
        'normal': { 'icon': "icons/pass_normal.svg", 'color': 'text-primary' },
        'strong': { 'icon': "icons/pass_strong.svg", 'color': 'text-primary' },
    };

    const [passStrength, setPassStrength] = useState<string>('weak');

    return (
        <>
            <div className="relative">
                <label className=" text-textdarkColor font-normal">Your name</label>
                <input id="email" name="email" type="text" className="peer h-10 w-full bg-loginBtnColor text-gray-900 focus:outline-none focus:borer-rose-600 pl-5 mt-2" placeholder="Enter your name" />
            </div>
            <div className="relative">
                <label className=" text-textdarkColor font-normal">E-mail or phone number</label>
                <input id="email" name="email" type="text" className="peer h-10 w-full bg-loginBtnColor text-gray-900 focus:outline-none focus:borer-rose-600 pl-5 mt-2" placeholder="Type your e-mail or phone number" />
            </div>
            <div className="relative">
                <label className="text-textdarkColor">Password</label>
                <input id="password" name="password" type="password" className="peer h-10 w-full bg-loginBtnColor text-gray-900 focus:outline-none focus:borer-rose-600 pl-5 mt-2" placeholder="************"
                    onChange={(e) => {
                        let passLenght = e.target.value.length;
                        if (passLenght >= 0 && passLenght < 6) {
                            setPassStrength('weak');
                        } else if (passLenght >= 6 && passLenght < 10) {
                            setPassStrength('normal');
                        } else {
                            setPassStrength('strong');
                        }
                    }}
                />
                <div className="absolute inset-y-0 end-0 grid place-content-center px-5 mt-8">
                    <Image alt='eye_icon' src={eye_icon} width={25} height={25} />
                </div>
            </div>
            <div className='flex justify-between items-center'>
                <div className=" text-distlineColor sm:text-center text-[12px]">Must be at least 8 characters</div>
                <div className="flex text-right sm:text-center text-[12px] hover:text-gray-500">
                    <Image className='object-contain' src={strengthList[passStrength].icon} alt='pw_status' width={18} height={12}></Image>
                    <span className={`${strengthList[passStrength].color} text-[12px] pl-[5px]`}>
                        {passStatus}
                    </span>
                </div>
            </div>
        </>
    );
};

CreateAccount.displayName = 'CreateAccount';

export default CreateAccount;
