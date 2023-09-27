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
        <div className={`flex flex-col border ${status? 'border-primary':'border-textdarkColor'} border-textdarkColor rounded-[8px] p-[8px] cursor-pointer`}
            onClick={(e) => {
                onClick(e);
            }}>
            <Image
                alt='plan_logo'
                src={thumbnail}
                className='my-auto ml-2 h-auto'
                width={70} height={70} />
            <p className='text-sm font-arial font-bold text-textdarkColor mt-5'>
                {title}
            </p>
            <p className='text-xs font-arial font-light leading-5 text-textdarkColor mt-1'>
                {description}
            </p>
        </div>
    );
};

CarePlanBox.displayName = 'CarePlanBox';

export default CarePlanBox;
