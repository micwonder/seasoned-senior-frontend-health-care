import React from 'react'

const SocialIcon = ({
    children,
}: {
    children: React.ReactNode,
}) => {
    return (
        <div className='h-[48px] w-[48px] mx-[5px] md:mx-0 md:mr-[5px] flex justify-center items-center bg-primary rounded-full'>
            {children}
        </div>
    );
};

SocialIcon.displayName = 'SocialIcon';

export { SocialIcon };
