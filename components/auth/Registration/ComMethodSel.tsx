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
        <div className='mt-5 flex justify-between items-center peer h-10 w-full bg-white border-[1px] rounded-md border-distlineColor text-sm font-arial pl-5 py-6 cursor-pointer'
            onClick={(e) => {
                onClick(e);
            }}>
            <p className='text-sm font-arial font-normal leading-5 text-textdarkColor'>
                {title}
            </p>
            <input
                type="radio"
                className="w-4 h-4 text-textdarkColor accent-[#CB5A6F] bg-gray-100 border-gray-300 mr-5"
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
