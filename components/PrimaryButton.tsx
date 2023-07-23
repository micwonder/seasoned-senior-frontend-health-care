'use client'

import React from 'react';

const PrimaryButton = ({
    children,
    onClicked = () => {},
}: {
    children: React.ReactNode,
    onClicked?: Function,
}) => {
    return (
        <button className='px-[57px] sm:px-[37px] py-[5px] bg-primary rounded-[5px]' onClick={() => onClicked()}>
            <span className='text-primaryButtonTextColor text-bigPrimaryButtonTextSize sm:text-[20px]'>{children}</span>
        </button >
    );
};

PrimaryButton.displayName = 'PrimaryButton';

export { PrimaryButton };
