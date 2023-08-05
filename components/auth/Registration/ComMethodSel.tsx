'use client'

import React from 'react';
import Image from 'next/image'
const ComMethodSel = ({
    title,
    status,
    onClick
}: {
    title: string,
    status: boolean,
    onClick: (e: React.MouseEvent<HTMLDivElement>) => void
}) => {
    return (
        <div className='mt-5 flex justify-between items-center border border-textdarkColor rounded-[8px] p-[8px] cursor-pointer'
            onClick={(e) => {
                onClick(e);
            }}>
            <p className='text-[14px] font-arial font-[400] leading-5 text-textdarkColor'>
                {title}
            </p>
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

ComMethodSel.displayName = 'ComMethodSel';

export default ComMethodSel;
