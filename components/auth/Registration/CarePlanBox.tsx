'use client'

import React from 'react';
import Image from 'next/image'
const CarePlanBox = ({
    title,
    description,
    thumbnail,
    status,
    onClick
}: {
    title: string,
    description: string,
    thumbnail: string,
    status: boolean,
    onClick: (e: React.MouseEvent<HTMLDivElement>) => void
}) => {
    return (
        <div className='flex justify-between items-center border border-textdarkColor rounded-[8px] p-[8px] cursor-pointer'
            onClick={(e) => {
                onClick(e);
            }}>
            <Image
                alt='plan_logo'
                src={thumbnail}
                className='my-auto ml-2 h-auto'
                width={240} height={240} />
            <div className="flex flex-col mx-2">
                <p className='text-[14px] font-arial font-[700] leading-5 text-textdarkColor'>
                    {title}
                </p>
                <p className='text-[12px] font-arial font-[300] leading-5 text-textdarkColor mt-1'>
                    {description}
                </p>
            </div>
            <input
                type="radio"
                className="w-4 h-4 text-textdarkColor bg-gray-100 border-gray-300 "
                name="planradio"
                checked={status}
                onChange={(val) => {
                    console.log(val)
                }}
            />
        </div>
    );
};

CarePlanBox.displayName = 'CarePlanBox';

export default CarePlanBox;
