import { url } from 'inspector';
import React from 'react';

const WithRightBG = ({
    imgpathname,
    children,
}: {
    imgpathname: string
    children: React.ReactNode,
}) => {
    return (
        <div className={`grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 min-h-screen`}>
            <div className='w-full'>
                {children}
            </div>
            <div
                style={{ backgroundImage: `url(${imgpathname})` }}
                className='bg-no-repeat sm:hidden md:hidden h-full bg-cover'></div>
        </div>
    );
};


export default WithRightBG;
