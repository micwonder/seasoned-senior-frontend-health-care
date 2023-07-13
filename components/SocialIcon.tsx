import React, { useState } from "react"

const SocialIcon = ({
    children,
}: {
    children: React.ReactNode,
}) => {
    return (
        <div className='h-[48px] w-[48px] mx-[5px] flex justify-center items-center bg-primary rounded-full'>
            {children}
        </div>
    );
};

SocialIcon.displayName = "SocialIcon";

export { SocialIcon };
