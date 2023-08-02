'use client'

import { useEffect } from 'react';

import '@/app/globals.css';

const ProgressStatusBar = ({
    completeness,
}: {
    completeness: number,
}) => {

    const renderProgressBar = () => {
        let elements = [];
        for (var i = 0; i < 11; i++) {
            if (i < completeness)
                elements.push(<><div className='w-full mx-1  h-[6px] rounded-lg bg-borderGreyColor'></div></>)
            else if (i == completeness)
                elements.push(<><div className='w-full mx-1  h-[6px] rounded-lg bg-primaryDisabled'></div></>)
            else
                elements.push(<><div className='w-full mx-1  h-[6px] rounded-lg bg-primary'></div></>)
        }
        return elements;
    }

    return (
        <>
            <div className="mt-[146px] flex justify-between max-w-[436px]">
                {
                    renderProgressBar()
                }
            </div>

        </>
    );
};

ProgressStatusBar.displayName = 'ProgressStatusBar';

export default ProgressStatusBar;
